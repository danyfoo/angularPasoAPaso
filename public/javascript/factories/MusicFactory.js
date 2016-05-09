/**
 * Created by darivera on 5/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('MusicFactory', MusicFactory);

    /* @ngInject */
    function MusicFactory() {
        var service = {
            getCDs: getCDs
        };
        return service;

        ////////////////

        function getCDs() {
            var cds = [
                'Songs of Innocence',
                'Forget the World',
                'Unlocked',
                'True',
                'Lovers on the Sun'
            ]
            return cds;
        }
    }

})();

