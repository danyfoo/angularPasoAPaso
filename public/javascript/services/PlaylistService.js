/**
 * Created by darivera on 5/5/2016.
 */
(function () {
    "use strict";
    angular
        .module('myApp', [])
        .service('PlaylistService', PlaylistService);

    function PlaylistService() {
        this.listar = function () {
            return 'Hola a Todos';
        };

        this.borrar = function (id) {
            console.log('Esto se va a decontrolar!');
        }
    };
})();