/**
 * Created by daniel on 8/05/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('PrimerCtrl', PrimerCtrl)
        .controller('SegundoCtrl', SegundoCtrl);

    PrimerCtrl.$inject = ['$cacheFactory'];
    SegundoCtrl.$inject = ['$cacheFactory'];

    /* @ngInject */
    function PrimerCtrl($cacheFactory) {
        var vm = this;
        var cachePrincipal = $cacheFactory('cachePrincipal');
        console.log($cacheFactory.info());

        vm.guardar = function () {
            cachePrincipal.put('mensaje', vm.texto);
        }
    }

    /* @ngInject */
    function SegundoCtrl($cacheFactory) {
        var vm = this;
        var cachePrincipal = $cacheFactory.get('cachePrincipal');

        vm.imprimir = function () {
            console.log(cachePrincipal.get('mensaje'));
        }
    }

})();

