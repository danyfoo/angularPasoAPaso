/**
 * Created by darivera on 5/4/2016.
 */
(function(){
    "use strict";
    angular
        .module('myApp')
        .controller('PlaylistCtrl', PlaylistCtrl)
        .config(compiler);

    compiler.$inject = ['$compileProvider'];

    /* @ngInject */
    function compiler ($compileProvider) {
        //Con esto eliminamos la informacion generado por ciertos funciones
        //en el DOM, como comentarios
        $compileProvider.debugInfoEnabled(true);
    }

    PlaylistCtrl.$inject = ['$scope', 'PlaylistProvider'];

    function PlaylistCtrl($scope, PlaylistProvider) {
        $scope.playlist = PlaylistProvider.listar();
        $scope.delete = function (id) {
            PlaylistProvider.borrar(id);
        };
    };
})();

