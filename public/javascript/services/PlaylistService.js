/**
 * Created by darivera on 5/5/2016.
 */
(function () {
    "use strict";
    angular
        .module('myApp', [])
        .service('PlaylistService', PlaylistService);

    function PlaylistService() {
        this.playlist = [
            'The Miracle (Of Joey Ramone)',
            'Raised By Wolves',
            'Every Breaking Wave',
            'Cedarwood Road',
            'California (There Is No End to Love)',
            'Sleep Like a Baby Tonight',
            'Song for Someone',
            'This Is Where You Can Reach Me Now',
            'Iris (Hold Me Close)',
            'The Troubles',
            'Volcano'
        ];

        this.listar = function () {
            return this.playlist;
        };

        this.borrar = function (id) {
            this.playlist.splice(id, 1);
        }
    };
})();