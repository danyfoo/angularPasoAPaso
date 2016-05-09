/**
 * Created by darivera on 5/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('ArtistFactory', ArtistFactory);

    //Si indico alguna dependencia que no existe el factory truena
    /* @ngInject */
    function ArtistFactory() {
        var service = {
            getArtistCD: getArtistCD
        };
        return service;

        ////////////////

        function getArtistCD() {
            var musica = [
                {artista: 'U2', cd: 'Songs of Innocence'},
                {artista: 'Afrojack', cd: 'Forget the World'},
                {artista: 'Avicci', cd: 'True'}
            ];
            return musica;
        }
    }

})();

