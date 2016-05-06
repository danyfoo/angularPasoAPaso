/**
 * Created by darivera on 5/6/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$q'];

    /* @ngInject */
    function AppCtrl($q) {
        var vm = this;
        vm.title = 'AppCtrl';

        var promesa1 = $q.defer();
        var promesa2 = $q.defer();
        var promesa3 = $q.defer();

        promesa1.promise.then(completado);
        promesa2.promise.then(completado);
        promesa3.promise.then(completado);

        function completado(data) {
            console.log(data);
        };

        setTimeout(function () {
            promesa1.resolve('Promesa #1 Resuelta');
        }, Math.random() * 10000);
        setTimeout(function () {
            promesa2.resolve('Promesa #2 Resuelta');
        }, Math.random() * 10000);

        setTimeout(function () {
            promesa3.resolve('Promesa #3 Resuelta');
        }, Math.random() * 10000);

        var todas = $q.all([promesa1.promise, promesa2.promise, promesa3.promise]);
        todas.then(function (data) {
            console.log(data);
        });
    }
})();

