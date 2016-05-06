/**
 * Created by darivera on 5/6/2016.
 */
(function(){
    "use strict";
    angular
        .module('myApp')
        .config(['PlaylistProvider', function(PlaylistProvider){
            var canciones = [
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

            PlaylistProvider.agregar(canciones);
        }])
})