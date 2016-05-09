/**
 * Created by daniel on 8/05/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('IntervalCtrl', IntervalCtrl);

    IntervalCtrl.$inject = ['$scope', '$interval'];

    /* @ngInject */
    function IntervalCtrl($scope, $interval) {
        var vm = this;
        vm.title = 'IntervalCtrl';

        var conteo = $interval(imprimirConteo, 1000, 5);
        var i = 4;

        function imprimirConteo() {
            if (i > 0) {
                console.log('Qudan ' + i + ' segundos.');
                i--;
            } else {
                console.log('Conteo Finalizado.');
            }
        }

        conteo.then(function () {
            alert('Ya han pasado 5 segundos.');
            $interval.cancel(conteo);
        });

        $scope.$on('$destroy', function () {
            $interval.cancel(conteo);
        });
    }

})();

