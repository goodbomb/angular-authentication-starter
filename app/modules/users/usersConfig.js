'use strict';

function userRoutes($stateProvider) {

    // For resolve to function correctly, a controller must be used that is neither assigned to a directive, 
    // nor assigned in an HTML file. For this reason, the resolve needs to be assigned to an abstract state.

    var users = {
            name: 'users',
            abstract: true,
            url: '/user/:id',
            template: '<div ui-view></div>',
            controller: 'UsersCtrl',
            data: {
                moduleClasses: 'users',
                pageClasses: ':id',
                pageTitle: '',
                pageDescription: ''
            },
            resolve: {
                user: function(Restangular, $stateParams){
                    console.log($stateParams.id);
                    return Restangular.one('users', $stateParams.id).get();
                }
            }
        },
        profile = {
            name: 'users.profile',
            url: '',
            template: '<div users-profile></div>',
            controller: 'UsersProfileCtrl',
            data: {
                moduleClasses: 'profile',
                pageClasses: ':id',
                pageTitle: 'Profile Page',
                pageDescription: 'User Profile Page.'
            }
        };

    $stateProvider.state(users);
    $stateProvider.state(profile);

}

userRoutes.$inject = ['$stateProvider'];
module.exports = userRoutes;