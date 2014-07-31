'use strict';

function userAuthRoutes($stateProvider) {

  var auth = {
      name: 'auth',
      abstract: true,
      url: '/auth',
      template: '<div class="module-view auth container"><div ui-view></div></div>',
      controller: 'UsersAuthCtrl'
  },
      signup = {
      name: 'auth.signup',
      url: '/signup',
      template: '<div users-auth-registration></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'signup',
        pageTitle: 'Sign Up',
        pageDescription: 'User Registration.'
      }
  },
      login = {
      name: 'auth.login',
      url: '/login',
      template: '<div users-auth-login></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'login',
        pageTitle: 'Sign In',
        pageDescription: 'Log in to your account.'
      }
  },
      passwordReset = {
      name: 'auth.passwordReset',
      url: '/password-reset',
      template: '<div users-auth-password-reset></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'password-reset',
        pageTitle: 'Reset Password',
        pageDescription: 'Reset your account password.'
      }
  };

  $stateProvider.state(auth);
  $stateProvider.state(signup);
  $stateProvider.state(login);
  $stateProvider.state(passwordReset);

}

userAuthRoutes.$inject = ['$stateProvider'];
module.exports = userAuthRoutes;