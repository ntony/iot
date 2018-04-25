'use strict';

angular.module('myApp.service', [])

    .factory('APIFactory', ['$http','$q', function($http,$q) {
        var apiFactory = {};

        apiFactory.serviceMethod = function(type,apiUrl,jsonData) {
            var deferred = $q.defer();
            $http({
                method: type,
                url: apiUrl,
                data:jsonData
            })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data, status);
                });

            return deferred.promise;
        };

        return apiFactory;
    }])

    .service('Service', ['APIFactory', '$q', function (APIFactory, $q) {
        var service = this;

        service.getDevices = function () {
            var deferred = $q.defer();
            APIFactory.serviceMethod("GET", "/devices").then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.addDevice = function (device) {
            var deferred = $q.defer();
            APIFactory.serviceMethod("POST", "/devices", device).then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.getDevice = function (id) {
            var deferred = $q.defer();
            APIFactory.serviceMethod("GET", "/devices/" + id).then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.modifySwitch = function (id, selectedSwitch, state) {
            var deferred = $q.defer();
            APIFactory.serviceMethod("GET", "/devices/" + id + "/modify?switch=" + selectedSwitch + "&state=" + state).then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.getMonitors = function () {
            var deferred = $q.defer();
            APIFactory.serviceMethod("GET", "/monitors").then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.getMonitor = function (id) {
            var deferred = $q.defer();
            APIFactory.serviceMethod("GET", "/monitors/" + id).then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.getMonitorContent = function (id) {
            var deferred = $q.defer();
            APIFactory.serviceMethod("GET", "/monitors/" + id + "/logs?sort=created,DESC").then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.addMonitor = function (monitor) {
            var deferred = $q.defer();
            APIFactory.serviceMethod("POST", "/monitors", monitor).then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.modifyMonitor = function (id, key) {
            var deferred = $q.defer();
            APIFactory.serviceMethod("GET", "/monitors/" + id + "/modify?key=" + key + "&value=0").then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        service.clearMonitorContent = function (id) {
            var deferred = $q.defer();
            APIFactory.serviceMethod("DELETE", "/monitors/" + id + "/logs").then(function (data) {
                deferred.resolve(data);
            },function(data){
                deferred.reject(data);
            });
            return deferred.promise;
        };

        return service;
    }]);
