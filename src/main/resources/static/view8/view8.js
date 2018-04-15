'use strict';

angular.module('myApp.view8', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view8', {
    templateUrl: 'view8/view8.html',
    controller: 'view8Ctrl'
  });
}])

.controller('view8Ctrl', ['$scope', 'Service', '$window', function ($scope, Service, $window) {

    $scope.model = {
        monitor: {},
        parameters: [{key: ""}]
    };

    $scope.addParameter = function () {
        $scope.model.parameters.push({key: ""});
    };

    $scope.removeParameter = function (index) {
        $scope.model.parameters.splice(index, 1);
    };

    $scope.clearForm = function () {
        $scope.model.monitor = {};
    };
    
    $scope.addMonitor = function (isValid) {
        if(isValid) {
            var monitor = {};
            monitor.name = $scope.model.monitor.name;
            $scope.add(monitor);
        }
    };

    $scope.add = function (monitor) {
        Service.addMonitor(monitor)
            .then(function (data) {
                var parameters = angular.copy($scope.model.parameters);
                angular.forEach(parameters, function (value) {
                    $scope.modifyMonitor(data.id, value.key);
                });
            })
            .catch(function (data) {
                // Handle error here
            });
    };

    $scope.modifyMonitor = function (id, key) {
        Service.modifyMonitor(id, key)
            .then(function (data) {
                setTimeout(function(){
                    $window.location.href = '/index.html';
                }, 2000);
            })
            .catch(function (data) {
                // Handle error here
            });
    }
}]);