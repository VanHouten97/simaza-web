(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .directive('estGrafico', estGrafico);

    /** @ngInject */
    function estGrafico() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/estatisticas/grafico/grafico.html',
            controller: 'estGraficoCtrl'
        }
    }
})();
