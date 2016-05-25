(function() {
    'use strict';

    angular
        .module('company.load')
        .factory('CompanyService', CompanyService);

    CompanyService.$inject = ['$http', '$q'];

    /* @ngInject */
    function CompanyService($http, $q) {
        var service = {
            getProductData: getProductData,
            getCompanyList: getCompanyList
        };
        return service;


        function getProductData() {
            var deffered = $q.defer();
            $http.get('data/products.json').success(function(response) {
                deffered.resolve(response.data);
            }, function(error) {
                deffered.reject(error);
            });

            return deffered.promise;
        };

        function getCompanyList() {
            var deffered = $q.defer();
            $http.get('data/company-list.json').success(function(response) {
                deffered.resolve(response.data);
            }, function(error) {
                deffered.reject(error);
            });

            return deffered.promise;
        };
    }
})();
