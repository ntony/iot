'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'Service', function ($scope, Service) {

        $scope.model = {
            devices: []
        };

        $scope.getDevices = function () {
            Service.getDevices()
                .then(function (data) {
                    $scope.model.devices = data;
                })
                .catch(function (data) {
                    // Handle error here
                });
        };

        $scope.getDevices();
    }]);