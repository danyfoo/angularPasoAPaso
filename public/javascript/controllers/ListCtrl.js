/**
 * Created by darivera on 5/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ListCtrl', ListCtrl);

    ListCtrl.$inject = ['$scope', 'EtiquetasFactory'];

    /* @ngInject */
    function ListCtrl($scope, EtiquetasFactory) {
        var vm = this;
        vm.title = 'ListCtrl';
        $scope.etiquetas = EtiquetasFactory.getEtiquetas();
    }

})();

