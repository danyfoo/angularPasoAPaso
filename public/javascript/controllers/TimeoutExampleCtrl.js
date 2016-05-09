/**
 * Created by daniel on 8/05/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('TimeOutCtrl', TimeOutCtrl);

    TimeOutCtrl.$inject = ['$timeout'];

    /* @ngInject */
    function TimeOutCtrl($timeout) {
        var vm = this;
        vm.title = 'TimeOutCtrl';
        var retraso = $timeout(Accion, 3000, true, 'Uno', 'Dos');


        function Accion(param1, param2) {
            console.log('Ejecutando de dos segundos');
            console.log('Parametros: ', param1, param2);
            return 'Mensaje devuelto por el temporizador.';
        };

        retraso
            .then(function (msg) {
                console.log(msg);
                console.log('Retraso Finalizado');
            })
            .catch(function () {
                console.log('Retraso Cancelado')
            });

        vm.cancelar = function () {
            $timeout.cancel(retraso);
        }
    }

})();

