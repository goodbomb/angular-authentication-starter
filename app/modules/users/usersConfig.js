'use strict';

function userRoutes($stateProvider) {

    // For resolve to function correctly, a controller must be used that is neither assigned to a directive, 
    // nor assigned in an HTML file. For this reason, the resolve needs to be assigned to an abstract state.

    var user = {
            name: 'user',
            abstract: true,
            url: '/user/:id',
            template: '<div ui-view></div>',
            controller: 'UsersCtrl',
            resolve: {
                user: function(Restangular, $stateParams){
                    console.log($stateParams.id);
                    return Restangular.one('users', $stateParams.id).get();
                }
            }
        },
        profile = {
            name: 'user.profile',
            url: '',
            template: '<div users-profile></div>',
            controller: 'UsersProfileCtrl',
            data: {
                moduleClasses: 'users',
                pageClasses: 'profile',
                pageTitle: 'Profile Page',
                pageDescription: 'User Profile Page.'
            }
        };

    $stateProvider.state(user);
    $stateProvider.state(profile);

}

userRoutes.$inject = ['$stateProvider'];
module.exports = userRoutes;