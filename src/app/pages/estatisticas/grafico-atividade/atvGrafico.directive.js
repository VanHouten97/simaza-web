(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .directive('atvGrafico', atvGrafico);

    /** @ngInject */
    function atvGrafico() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/estatisticas/grafico-atividade/grafico.html',
            controller: 'atvGraficoCtrl',
            controllerAs: 'vm'
        }
    }
})();
