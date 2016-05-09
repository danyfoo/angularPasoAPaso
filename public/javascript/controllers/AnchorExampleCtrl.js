/**
 * Created by daniel on 8/05/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .run(function ($anchorScroll) {
            //Mediante $anchorScroll.yOffset podemos indicarle un margen
            //cuando nos posiciona a nuestra id, en este caso deja 50px
            //en la parte superior de nuestra vista
            $anchorScroll.yOffset = 50;
        })
        .controller('AnchorCtrl', AnchorCtrl);

    AnchorCtrl.$inject = ['$scope', '$anchorScroll', '$location'];

    /* @ngInject */
    function AnchorCtrl($scope, $anchorScroll, $location) {
        //Obtenemos la Id que pasamos de la vista mediante la funcion
        //irA, con ella creamos un identificador haremos el scroll hacia
        //la seccion de la pagina con el id que seleccionamos
        $scope.irA = function (id) {
            var nuevaId = 'contenido' + id;
            //Mediante .hash() podemos agregar la id en nuestra url
            $location.hash(nuevaId);
            //Indicamos hacia cual id se movera
            $anchorScroll(nuevaId);
        }
    }
})();

