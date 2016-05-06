/**
 * Created by darivera on 5/6/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('CustomPromiseCtrl', CustomPromiseCtrl);

    CustomPromiseCtrl.$inject = ['$scope', '$q'];

    /* @ngInject */
    function CustomPromiseCtrl($scope, $q) {
        var vm = this;
        vm.title = 'CustomPromiseCtrl';

        function tarea(comprobar){
            return $q(function(reject, resolve){
                setTimeout(function(){
                    if(!comprobar){
                        resolve('Promesa Resuelta');
                    } else {
                        resolve('Promesa Rechazada');
                    }
                }, 2000);
            });
        }

        $scope.accion = ejecutar;
        function ejecutar(comprobar){
            tarea(comprobar).then(function(data){
                $scope.resuelta = data;
            }, function(error){
                $scope.rechazada = error;
            })
        }
    }
})();

