'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'Service', '$window', function ($scope, Service, $window) {

    $scope.model = {
        device: {},
        switches: [{name: ""}]
    };

    $scope.addSwitch = function () {
        $scope.model.switches.push({name: ""});
    };

    $scope.removeSwitch = function (index) {
        $scope.model.switches.splice(index, 1);
    };

    $scope.clearForm = function () {
        $scope.model.device = {};
    };
    
    $scope.addDevice = function (isValid) {
        if(isValid) {
            var device = {};
            device.name = $scope.model.device.name;
            device.switches = {};
            if($scope.model.switches.length > 0) {
                angular.forEach($scope.model.switches, function (value) {
                    device.switches[value.name] = true;
                });
            }
            device.type = $scope.model.device.type;
            $scope.add(device);
        }
    };

    $scope.add = function (device) {
        Service.addDevice(device)
            .then(function (data) {
                $window.location.href = '/index.html';
            })
            .catch(function (data) {
                // Handle error here
            });
    }
}]);