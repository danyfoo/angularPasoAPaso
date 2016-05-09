/**
 * Created by darivera on 5/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('EtiquetasFactory', EtiquetasFactory);

    /* @ngInject */
    function EtiquetasFactory() {
        var service = {
            getEtiquetas: getEtiquetas
        };
        return service;

        ////////////////

        function getEtiquetas() {
            return ['Actualidad', 'Finanzas', 'Tecnologia'];
        }
    }

})();

