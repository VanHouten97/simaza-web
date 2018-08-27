(function () {
  'use strict';

  angular.module('SIMAZE.pages', [
    'ui.router',

    'SIMAZE.pages.dashboard',
    'SIMAZE.pages.virtualizacao',
    'SIMAZE.pages.equipe',
    'SIMAZE.pages.estatisticas',
    'SIMAZE.pages.municipio',
    'SIMAZE.pages.pncd',
    'SIMAZE.pages.liraa',
    'SIMAZE.pages.amostras',
    'SIMAZE.pages.relatorios',
    'SIMAZE.pages.zootek',
    'SIMAZE.pages.avancado',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
