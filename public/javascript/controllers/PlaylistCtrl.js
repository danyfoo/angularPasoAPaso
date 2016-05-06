/**
 * Created by darivera on 5/4/2016.
 */
(function(){
    "use strict";
    angular
        .module('myApp')
        .controller('PlaylistCtrl', PlaylistCtrl);

    PlaylistCtrl.$inject = ['$scope', 'PlaylistService'];

    function PlaylistCtrl($scope, PlaylistService) {
        $scope.playlist = PlaylistService.listar();
        $scope.delete = function (id) {
            PlaylistService.borrar(id);
        };
    };
})();

