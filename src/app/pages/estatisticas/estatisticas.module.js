(function () {
  'use strict';

  angular.module('SIMAZE.pages.estatisticas', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('estatisticas', {
          url: '/estatisticas',
          templateUrl: 'app/pages/estatisticas/estatisticas.html',
          title: 'Estatisticas',
          sidebarMeta: {
            icon: 'fa fa-bar-chart',
            order: 3,
          },
        });
  }

})();
