(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .directive('indicePredial', indicePredial);

    /** @ngInject */
    function indicePredial() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/estatisticas/predial/tabela.html',
            controller: 'indicePredialCtrl'
        }
    }
})();
