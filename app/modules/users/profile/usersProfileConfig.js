'use strict';

function userProfileRoutes($stateProvider) {

    var profile = {
            name: 'profile',
            url: '/user/:id',
            template: '<div users-profile></div>',
            controller: 'UsersProfileCtrl',
            data: {
                moduleClasses: 'users profile',
                pageClasses: ':id',
                pageTitle: 'Profile Page',
                pageDescription: 'User Profile Page.'
            },
            resolve: {
                user: function(Restangular, $stateParams){
                    return Restangular.one('users', $stateParams.id).get();
                }
            }
        };

    $stateProvider.state(profile);

}

userProfileRoutes.$inject = ['$stateProvider'];
module.exports = userProfileRoutes;