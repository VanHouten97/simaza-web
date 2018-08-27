(function () {
    'use strict';

    angular.module('SIMAZE.pages.dashboard')
        .controller('dashboardResumoCtrl', resumo);

    /** @ngInject */
    function resumo($scope) {
        $scope.itens = [
            {
                icone: 'assets/icons/agente-campo.png',
                texto: 'Agentes Online',
                variavel: 15
            },
            {
                icone: 'assets/icons/grafico.png',
                texto: 'Índice Breateu',
                variavel: '1,7'
            },
            {
                icone: 'assets/icons/grafico.png',
                texto: 'Índice Predial',
                variavel: '2,2'
            },
            {
                icone: 'assets/icons/foco.png',
                texto: 'Focos/ Depósitos',
                variavel: 43
            }
        ];
    }
})()
