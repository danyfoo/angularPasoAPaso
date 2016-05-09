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

        var clases = {
            'float': 'right',
            'padding': '0 10px',
            'background-color': 'red',
            'border': '2px solid black',
            'border-radius': '10px'
        };
        $scope.clases = clases;
    }

})();

