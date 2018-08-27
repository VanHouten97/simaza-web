(function() {
    'use strict';

    angular.module('SIMAZE.theme').controller('pageTopCtrl', pageTopCtrl);

    /** @ngInject */
    function pageTopCtrl($scope) {
        $scope.logout = function() {
            localStorage.removeItem('token');
            window.location.href = "./auth.html";
        }
    }
})();
