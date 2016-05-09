/**
 * Created by darivera on 5/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('MusicCtrl', MusicCtrl);

    MusicCtrl.$inject = ['$scope', 'MusicFactory'];

    /* @ngInject */
    function MusicCtrl($scope, MusicFactory) {
        var vm = this;
        vm.title = 'MusicCtrl';

        $scope.cds = MusicFactory.getCDs();
    }

})();

