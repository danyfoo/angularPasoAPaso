/**
 * Created by daniel on 8/05/16.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .factory('$exceptionHandler', ExceptionHandler)
        .controller('ExceptionCtrl', ExceptionCtrl);

    ExceptionHandler.$inject = ['$log'];
    ExceptionCtrl.$inject = ['$scope'];

    /* @ngInject */
    function ExceptionHandler($log) {
        return function (exception, cause) {
            $log.debug.apply($log, arguments);
        }
    }

    /* @ngInject */
    function ExceptionCtrl($scope) {
        throw new Error('Error Grave!');
    }

})();

