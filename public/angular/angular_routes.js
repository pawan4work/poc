'use strict';
// Declare app level module which depends on filters, and services
angular.module('portal', [
  'ui.bootstrap',
  'ui.router',
  'ngCookies',
  'toaster'
  
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  
  $stateProvider

    .state('home', {
      url: "/",
      templateUrl: '/angular/dashboard/views/dashboard.html',
      controller: "portalCtrl"
    })
    // .state('dashboard', {
    //   url: "/dashboard",
    //   templateUrl: '/angular/dashboard/views/dashboard.html',
    //   controller: "portalCtrl"
    // })
    

    

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  
}).run(['$rootScope', '$state', '$location', 'toaster' , '$cookies', function($rootScope, $state, $location, toaster, $cookies) {

    

     //  $rootScope.$on('$stateChangeStart', function(event, next, toState, toStateParams, fromState, fromParams) {
     //    if($cookies.get('id') === undefined || $cookies.get('id') ==='' || !$cookies.get('id')){
     //      if(next.templateUrl =='/angular/users/views/login.html'){
     //      //Do nothing you are on right place.        
     //      }
     //      else
     //      {
     //        window.location.href ="/";
     //      }
     //    }
     // });
}]);

