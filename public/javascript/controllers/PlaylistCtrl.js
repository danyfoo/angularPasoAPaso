/**
 * Created by darivera on 5/4/2016.
 */
(function(){
    "use strict";
    angular
        .module('myApp')
        .controller('PlaylistCtrl', PlaylistCtrl);

    PlaylistCtrl.$inject = ['$scope', 'PlaylistProvider'];

    function PlaylistCtrl($scope, PlaylistProvider) {
        $scope.playlist = PlaylistProvider.listar();
        $scope.delete = function (id) {
            PlaylistProvider.borrar(id);
        };
    };
})();

