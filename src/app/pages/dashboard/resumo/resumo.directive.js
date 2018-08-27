(function () {
    'use strict';

    angular.module('SIMAZE.pages.dashboard')
        .directive('dashboardResumo', resumo);

    /** @ngInject */
    function resumo() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/dashboard/resumo/resumo.html',
            controller: 'dashboardResumoCtrl'
        }
    }
})()
