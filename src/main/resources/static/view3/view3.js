'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/view3', {
                templateUrl: 'view3/view3.html',
                controller: 'View3Ctrl'
            })
            .when('/view3/:id', {
                templateUrl: 'view3/view3.html',
                controller: 'View3Ctrl'
            });
    }])

    .controller('View3Ctrl', ['$scope', 'Service', '$routeParams', function ($scope, Service, $routeParams) {

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