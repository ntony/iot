'use strict';

angular.module('myApp.view6', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view6', {
            templateUrl: 'view6/view6.html',
            controller: 'view6Ctrl'
        });
    }])

    .controller('view6Ctrl', ['$scope', 'Service', function ($scope, Service) {

        $scope.model = {
            monitors: []
        };

        $scope.getMonitors = function () {
            Service.getMonitors()
                .then(function (data) {
                    $scope.model.monitors = data;
                })
                .catch(function (data) {
                    // Handle error here
                });
        };

        $scope.getMonitors();
    }]);