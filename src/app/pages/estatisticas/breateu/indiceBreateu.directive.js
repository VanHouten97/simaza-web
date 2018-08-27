(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .directive('indiceBreateu', indiceBreateu);

    /** @ngInject */
    function indiceBreateu() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/estatisticas/breateu/tabela.html',
            controller: 'indiceBreateuCtrl'
        }
    }
})();
