'use strict';

/**
 * @ngdoc overview
 * @name companyApp
 * @description
 * # companyApp
 *
 * Main module of the application.
 */
var companyApp = angular.module('company', ['ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'company.load'
]);

companyApp.config(function($routeProvider) {

    $routeProvider.otherwise({
        redirectTo: '/company'
    });

    $routeProvider.when('/company', {
        controller: 'CompanyController',
        templateUrl: 'components/company/add-company.html'
    });
});
