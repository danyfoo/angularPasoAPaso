/**
 * Created by darivera on 5/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ArtistCtrl', ArtistCtrl);

    ArtistCtrl.$inject = ['$scope', 'ArtistFactory'];

    /* @ngInject */
    function ArtistCtrl($scope, ArtistFactory) {
        var vm = this;
        vm.title = 'ArtistCtrl';

        $scope.musica = ArtistFactory.getArtistCD();
        console.log(ArtistFactory.getArtistCD());
    }

})();

