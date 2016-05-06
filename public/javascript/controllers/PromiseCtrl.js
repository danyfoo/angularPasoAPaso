/**
 * Created by darivera on 5/6/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('PromiseCtrl', PromiseCtrl);

    PromiseCtrl.$inject = ['$scope','$q'];

    /* @ngInject */
    function PromiseCtrl($scope, $q) {
        var vm = this;
        vm.title = 'PromiseCtrl';

        ////////////////

        function checkServer() {
            var def = $q.defer();
            setTimeout(function () {
                def.resolve('Online');
            }, 2000);
            return def.promise;
        };

        function checkHTTP() {
            var def = $q.defer();
            setTimeout(function () {
                if (Math.floor(Math.random() * 100 > 50)) {
                    def.resolve('Online');
                } else {
                    def.reject('El servicio no esta disponible');
                }
            }, 5000);
            return def.promise;
        };

        function checkDb() {
            var def = $q.defer();
            setTimeout(function () {
                if (Math.floor(Math.random() * 100 > 50)) {
                    def.resolve('Online');
                } else {
                    def.reject('El servicio no esta disponible');
                }
            }, 3000);
            return def.promise;
        };

        function checkSsl() {
            var def = $q.defer();
            setTimeout(function () {
                def.notify('Comprobacion de conexion segura iniciada...');
                if (Math.floor(Math.random() * 100 > 50)) {
                    def.notify('Las conexiones seguras estan habilitadas');
                    def.resolve('SSL');
                } else {
                    def.notify('Las conexiones seguras estan habilitadas');
                    def.reject('Desactivadas');
                };
            }, 4000);
            return def.promise;
        };

        checkServer().then(function(result){
           $scope.status = result;
        });
        checkHTTP().then(function(result){
           $scope.http = result;
        }, function(err){
            $scope.http = err;
        });
        checkDb().then(function(result){
            $scope.db = result;
        }, function(err){
            $scope.db = err;
        });
        checkSsl().then(function(result){
            $scope.ssl = result;
        }, function(err){
            $scope.ssl = err;
        }, function(notify){
            console.log(notify);
        });
    }

})();

