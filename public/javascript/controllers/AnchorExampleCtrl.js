/**
 * Created by daniel on 8/05/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('AnchorCtrl', AnchorCtrl);

    AnchorCtrl.$inject = ['$scope', '$anchorScroll'];

    /* @ngInject */
    function AnchorCtrl($scope, $anchorScroll) {
        $scope.irA = function (id) {
            var nuevaId = 'contenido' + id;
            $anchorScroll(nuevaId);
        }
    }
})();

