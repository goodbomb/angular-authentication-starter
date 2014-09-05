// =======================================================================
// Gulp Plugins
// =======================================================================
var gulp            = require('gulp'),
    connect         = require('gulp-connect'),
    gutil           = require('gulp-util'),
    jshint          = require('gulp-jshint'),
    stylish         = require('jshint-stylish'),
    concat          = require('gulp-concat'),
    rimraf          = require('gulp-rimraf'),
    streamify       = require('gulp-streamify'),
    uglify          = require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps'),
    less            = require('gulp-less'),
    prefix          = require('gulp-autoprefixer'),
    minifyCSS       = require('gulp-minify-css'),
    notify          = require('gulp-notify'),
    browserify      = require('browserify'),
    watchify        = require('watchify'),
    source          = require('vinyl-source-stream'),
    buffer          = require('vinyl-buffer'),
    runSequence     = require('run-sequence');


// =======================================================================
// File Paths
// =======================================================================
var filePath = {
    build: { 
        dest: './dist' 
    },
    lint: { 
        src: ['!./app/assets/vendor/**/*.js', './app/*.js', './app/**/*.js'] 
    },
    browserify: { 
        DEVsrc: './app/appDev.js',
        PRODsrc: './app/app.js',
        watch: 
        [
            '!./app/assets/libs/*.js',
            '!./app/assets/libs/**/*.js',
            './app/*.js','./app/**/*.js', 
            '/app/**/*.html'
        ] 
    },
    styles: { 
        src: './app/app.less', 
        watch: ['./app/app.less','./app/**/*.less'] 
    },
    images: { 
        src: './app/assets/images/**/*', 
        watch: ['./app/assets/images', './app/assets/images/**/*'],
        dest: './dist/images/' 
    },
    icons: { 
        src: './app/assets/icons/fonts/*', 
        watch: ['./app/assets/icons/fonts/*'],
        dest: './dist/fonts/'
    },
    vendorJS: { 
        // These files will be bundled into a single vendor.js file that's called at the bottom of index.html
        src: 
        [
            './libs/jquery/dist/jquery.js', // v2.1.1
            './libs/bootstrap/dist/js/bootstrap.js', // v3.1.1
            './app/assets/vendor/modernizr.js',
            './app/assets/vendor/webshim/js-webshim/dev/polyfiller.js' // v1.14.5
        ]
    },
    vendorCSS: { 
        src: 
        [
            './libs/bootstrap/dist/css/bootstrap.css', // v3.1.1
            './app/assets/icons/styles.css',
            './libs/animate.css/animate.css' // v3.1.1
        ]
    },
    copyIndex: { 
        src: './app/index.html', 
        watch: './app/index.html' 
    },
    copyFavicon: { 
        src: './app/favicon.png' 
    }
};


// =======================================================================
// Error Handling
// =======================================================================
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}


// =======================================================================
// Server Task
// =======================================================================  
var express = require('express'),
    server  = express();

// Server settings
server.use(express.static('./dist'));
// Redirects everything back to our index.html
server.all('/*', function(req, res) {
    res.sendfile('/', { root: './dist' });
});

gulp.task('devServer', function() {
  connect.server({
    root: './dist',
    fallback: './dist/index.html',
    port: 5000,
    livereload: true,
    middleware: function(connect, o) {
        return [ (function() {
            var url = require('url');
            var proxy = require('proxy-middleware');
            var options = url.parse('http://localhost:3000/');
            options.route = '/api';
            return proxy(options);
        })() ];
    }
  });
});

gulp.task('stageServer', function() {
  connect.server({
    root: './dist',
    fallback: './dist/index.html',
    port: 5050,
    livereload: true,
    middleware: function(connect, o) {
        return [ (function() {
            var url = require('url');
            var proxy = require('proxy-middleware');
            var options = url.parse('http://api.taliflo.com/');
            options.route = '/api';
            return proxy(options);
        })() ];
    }
  });
});


// =======================================================================
// Clean out dist folder contents on build
// =======================================================================  
gulp.task('clean-dev', function () {
    return gulp.src(['!./dist/vendor.js', '!./dist/vendor.css', './dist/*.js', './dist/*.css', './dist/*.html', './dist/*.png', './dist/*.ico'], {read: false})
        .pipe(rimraf());
});

gulp.task('clean-full', function () {
    return gulp.src(['./dist/*'], {read: false})
        .pipe(rimraf());
});


// =======================================================================
// JSHint
// =======================================================================
gulp.task('lint', function() {
    return gulp.src(filePath.lint.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});


// =======================================================================
// Browserify Bundle
// =======================================================================  
gulp.task('bundle-dev', function() {
    var bundler = watchify(filePath.browserify.DEVsrc);

    bundler.on('update', rebundle)

    function rebundle () {
        return bundler.bundle({ debug: true })
            .pipe(source('bundle.js'))
            .on("error", handleError)
            .pipe(buffer())
            // Comment out the "Uglify" task if you don't want to minify your app in your dev environment. 
            // However, it can be useful to minify your app periodically to debug any problems with minification.
            // .pipe(streamify(uglify()))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(filePath.build.dest))
            .pipe(notify({ message: 'Browserify task complete' }))
            .pipe(connect.reload());
    }

    return rebundle()
});

gulp.task('bundle-prod', function() {
    var bundler = watchify(filePath.browserify.PRODsrc);

    bundler.on('update', rebundle)

    function rebundle () {
        return bundler.bundle({ debug: true })
            .pipe(source('bundle.js'))
            .on("error", handleError)
            .pipe(buffer())
            .pipe(streamify(uglify()))
            .pipe(gulp.dest(filePath.build.dest))
            .pipe(notify({ message: 'Browserify task complete' }))
            .pipe(connect.reload());
    }

    return rebundle()
});


// =======================================================================
// Styles Task
// =======================================================================  
gulp.task('styles-dev', function () {
    return gulp.src(filePath.styles.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .on("error", handleError)
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"), {map: true})
    //    .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(filePath.build.dest))
        .on("error", handleError)
        .pipe(notify({ message: 'Styles task complete' }))
        .pipe(connect.reload());
});

gulp.task('styles-prod', function () {
    return gulp.src(filePath.styles.src)
        .pipe(less())
        .on("error", handleError)
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"), {map: true})
        .pipe(minifyCSS())
        .pipe(gulp.dest(filePath.build.dest))
        .on("error", handleError)
        .pipe(notify({ message: 'Styles task complete' }))
});


// =======================================================================
// Images Task
// =======================================================================  
gulp.task('images', function() {
    return gulp.src(filePath.images.src)
        .on("error", handleError)
        .pipe(gulp.dest(filePath.images.dest))
        .pipe(notify({ message: 'Images copied' }))
        .pipe(connect.reload());
});


// =======================================================================
// Icons Task
// =======================================================================  
gulp.task('icons', function() {
    return gulp.src(filePath.icons.src)
        .on("error", handleError)
        .pipe(gulp.dest(filePath.icons.dest))
        .pipe(notify({ message: 'Icons copied' }))
        .pipe(connect.reload());
});


// =======================================================================
// Vendor JS Task
// =======================================================================  
gulp.task('vendorJS', function () {
    return gulp.src(filePath.vendorJS.src)
        .pipe(concat("vendor.js"))
        .on("error", handleError)
        .pipe(uglify())
        .pipe(gulp.dest(filePath.build.dest))
        .pipe(notify({ message: 'VendorJS task complete' }))
});


// =======================================================================
// Vendor CSS Task
// =======================================================================  
gulp.task('vendorCSS', function () {
    return gulp.src(filePath.vendorCSS.src)
        .pipe(concat("vendor.css"))
        .on("error", handleError)
        .pipe(minifyCSS())
        .pipe(gulp.dest(filePath.build.dest))
        .pipe(notify({ message: 'VendorCSS task complete' }))
        .pipe(connect.reload());
});


// =======================================================================
// Copy index.html
// =======================================================================  
gulp.task('copyIndex', function () {
    return gulp.src(filePath.copyIndex.src)
        .pipe(gulp.dest(filePath.build.dest))
        .pipe(notify({ message: 'index.html successfully copied' }))
        .pipe(connect.reload());
});


// =======================================================================
// Copy Favicon
// =======================================================================  
gulp.task('copyFavicon', function () {
    return gulp.src(filePath.copyFavicon.src)
        .pipe(gulp.dest(filePath.build.dest))
        .pipe(notify({ message: 'favicon successfully copied' }));
});


// =======================================================================
// Watch for changes
// =======================================================================  
gulp.task('watch', function () {
    gulp.watch(filePath.browserify.watch, ['bundle-dev']);
    gulp.watch(filePath.styles.watch, ['styles-dev']);
    gulp.watch(filePath.images.watch, ['images']);
    gulp.watch(filePath.icons.watch, ['icons']);
    gulp.watch(filePath.vendorJS.src, ['vendorJS']);
    gulp.watch(filePath.vendorCSS.src, ['vendorCSS']);
    gulp.watch(filePath.copyIndex.watch, ['copyIndex']);
    console.log('Watching...');
});


// =======================================================================
// Sequential Build Rendering
// =======================================================================  

// run "gulp" in terminal to build the DEV app
gulp.task('build-dev', function(callback) {
    runSequence(
        ['clean-dev', 'lint'],
        // images and vendor tasks are removed to speed up build time. Use "gulp build" to do a full re-build of the dev app.
        ['bundle-dev', 'styles-dev', 'copyIndex', 'copyFavicon'],
        ['devServer', 'watch'],
        callback
    );
});

// run "gulp prod" in terminal to build the PROD-ready app
gulp.task('build-prod', function(callback) {
    runSequence(
        ['clean-full', 'lint'],
        ['bundle-prod', 'styles-prod', 'images', 'icons', 'vendorJS', 'vendorCSS', 'copyIndex', 'copyFavicon'],
        ['stageServer'],
        callback
    );
});

// run "gulp build" in terminal for a full re-build in DEV
gulp.task('build', function(callback) {
    runSequence(
        ['clean-full', 'lint'],
        ['bundle-dev', 'styles-dev', 'images', 'icons', 'vendorJS', 'vendorCSS', 'copyIndex', 'copyFavicon'],
        ['devServer', 'watch'],
        callback
    );
});


gulp.task('default',['build-dev']); 
gulp.task('prod',['build-prod']); 