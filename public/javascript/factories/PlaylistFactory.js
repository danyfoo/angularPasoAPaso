/**
 * Created by darivera on 5/5/2016.
 */
(function(){
    "use strict";
    angular.module('myApp')
        .factory('PlaylistFactory', PlaylistFactory);

    function PlaylistFactory() {
        var playlist = [
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

        var getPlaylist = function () {
            return playlist;
        };

        var deleteSong = function (id) {
            playlist.splice(id, 1);
        };

        var service = {
            getPlaylist: getPlaylist,
            deleteSong: deleteSong
        }

        return service;
    };
})();