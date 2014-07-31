'use strict';

function userProfileRoutes($stateProvider) {

    var profile = {
            name: 'profile',
            url: '/user/:id',
            template: '<div ui-view></div>',
            controller: 'UsersProfileCtrl',
            resolve: {
                user: function(Restangular, $stateParams){
                    console.log($stateParams.id);
                    return Restangular.one('users', $stateParams.id).get();
                }
            }
        };

    $stateProvider.state(profile);

}

userProfileRoutes.$inject = ['$stateProvider'];
module.exports = userProfileRoutes;