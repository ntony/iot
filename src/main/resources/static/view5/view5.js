'use strict';

angular.module('myApp.view5', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/view5', {
                templateUrl: 'view5/view5.html',
                controller: 'view5Ctrl'
            })
            .when('/view5/:id', {
                templateUrl: 'view5/view5.html',
                controller: 'view5Ctrl'
            });
    }])

    .controller('view5Ctrl', ['$scope', 'Service', '$routeParams', function ($scope, Service, $routeParams) {

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

        if($scope.model.id) {
            $scope.getDevice($scope.model.id);
        }

        setInterval(function(){
            //window.location.reload(1);
            $scope.getDevice($scope.model.id);
        }, 5000);
    }]);