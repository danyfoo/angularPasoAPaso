/**
 * Created by daniel on 8/05/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$http'];

    /* @ngInject */
    function UserCtrl($scope, $http) {
        var vm = this;
        vm.title = 'UserCtrl';

        $http.get('http://jsonplaceholder.typicode.com/users')
            .success(function (data, status) {
                $scope.usuarios = data;
            })
            .error(function (data, status) {
                console.log(data, status);
            })
    }

})();

