'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/view4', {
                templateUrl: 'view4/view4.html',
                controller: 'view4Ctrl'
            })
            .when('/view4/:id', {
                templateUrl: 'view4/view4.html',
                controller: 'view4Ctrl'
            });
    }])

    .controller('view4Ctrl', ['$scope', 'Service', '$routeParams', function ($scope, Service, $routeParams) {

        $scope.model = {
            id: $routeParams.id,
            device: null
        };

        $scope.getDevice = function (id) {
            Service.getDevice(id)
                .then(function (data) {
                    $scope.model.device = data;
                })
                .catch(function (data) {
                    // Handle error here
                });
        };

        $scope.modifySwitch = function (id, selectedSwitch, state) {
            Service.modifySwitch(id, selectedSwitch, state)
                .then(function (data) {
                    $scope.model.device = data;
                })
                .catch(function (data) {
                    // Handle error here
                });
        };

        $scope.checkBoxModel = {
            onClick: function (key, value) {
                $scope.modifySwitch($scope.model.id, key, value);
            }
        };

        if($scope.model.id) {
            $scope.getDevice($scope.model.id);
        }
    }]);