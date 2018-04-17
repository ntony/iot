'use strict';

angular.module('myApp.view7', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/view7', {
                templateUrl: 'view7/view7.html',
                controller: 'view7Ctrl'
            })
            .when('/view7/:id', {
                templateUrl: 'view7/view7.html',
                controller: 'view7Ctrl'
            });
    }])

    .controller('view7Ctrl', ['$scope', 'Service', '$routeParams', function ($scope, Service, $routeParams) {

        $scope.model = {
            id: $routeParams.id,
            monitor: null
        };

        $scope.getMonitor = function (id) {
            Service.getMonitor(id)
                .then(function (data) {
                    $scope.model.monitor = data;
                    $scope.getMonitorContent(id);
                })
                .catch(function (data) {
                    // Handle error here
                });
        };

        $scope.getMonitorContent = function (id) {
            Service.getMonitorContent(id)
                .then(function (data) {
                    $scope.model.monitor.contents = data.content;
                })
                .catch(function (data) {
                    // Handle error here
                });
        };

        if($scope.model.id) {
            $scope.getMonitor($scope.model.id);
        }

        setInterval(function(){
            $scope.getMonitor($scope.model.id);
        }, 10000);
    }]);