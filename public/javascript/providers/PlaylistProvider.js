/**
 * Created by darivera on 5/6/2016.
 */
(function(){
    "use strict";
    angular
        .module('myApp')
        .provider('PlaylistProvider', PlaylistProvider);

    function PlaylistProvider(){
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

        var listar = function(){
            return playlist;
        };
        var borrar = function(id){
            playlist.splice(id, 1);
        };

        return{
            agregar: function(data){
                playlist, playlist.concat(data);
            },
            $get: function(){
                return {
                    listar: listar,
                    borrar: borrar
                }
            }
        }
    };
})();