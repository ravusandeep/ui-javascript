'use strict';
angular.module('company.load', []).controller('CompanyController', function($scope, $http, CompanyService) {
    $scope.input = {
        "newCompanyName": ''
    };
    $scope.companyList = '';
    $scope.prodcutList = '';
    var getCompanyList = function() {
        CompanyService.getCompanyList().then(
            function(response) {
                $scope.companyList = response;
            }
        )
    }

    var getProductData = function() {
        CompanyService.getProductData().then(
            function(response) {
                $scope.prodcutList = response;
            }
        )
    }

    getCompanyList();
    getProductData();
    $scope.createCompany = function() {
        var newComapnyName = $scope.input.newCompanyName;
        var isCompanyExist = _.findWhere($scope.companyList, {
            companyName: newComapnyName
        });
        if (!isCompanyExist) {
            var addCompany = {
                "companyName": $scope.input.newCompanyName,
                "companyType": "company",
                "productList":[]						
            }
            $scope.companyList.push(addCompany);
            $scope.input.newCompanyName = '';
        } else {
            $scope.input.newCompanyName = '';
            alert("CompanyExist");
        }


    };

  

    $scope.bankruptCompay = function() {

        var compIndex = _.map(new Array($scope.companyList.length + 1).join(), function(item, index) {
            return index;
        });
        var ramInd = _.random(0, compIndex.length - 1);
        if ($scope.companyList[ramInd].companyType === 'bankrupt') {
            alert("The Random company alredy bankrupt");
        } else {
            var copuVal = $scope.companyList.splice(ramInd, 1)[0];
            copuVal.companyType = 'bankrupt';
            $scope.companyList.splice(ramInd, 0, copuVal);
        }

    };

    $scope.addProductCompay = function() {
    	/*var private = _.findWhere($scope.companyList, {
                                        companyType: 'company'
                                      });
    	var compIndex = _.map(new Array($scope.prodcutList.length + 1).join(), function(item, index) {
            return index;
        });
        var ramInd = _.random(0, compIndex.length - 1);*/



    };
});
