/**
 * Created by darivera on 5/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('miCtrl', miCtrl);

    miCtrl.$inject = ['$scope'];

    /* @ngInject */
    function miCtrl($scope) {
        var vm = this;
        vm.title = 'miCtrl';

        var clases = ['flotar', 'fondoRojo', 'bordesRedondeados'];
        $scope.generarClases = function () {
            return clases.join(' ');
        }
    }

})();

