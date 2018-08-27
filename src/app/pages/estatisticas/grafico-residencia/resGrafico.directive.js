(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .directive('resGrafico', resGrafico);

    /** @ngInject */
    function resGrafico() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/estatisticas/grafico-residencia/grafico.html',
            controller: 'resGraficoCtrl',
            controllerAs: 'vm2'
        }
    }
})();
