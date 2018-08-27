(function () {
  'use strict';

  angular.module('SIMAZE.pages.avancado', [
      'SIMAZE.pages.avancado.usuarios'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('avancado', {
          url: '/avancado',
          title: 'Avançado',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          sidebarMeta: {
            icon: 'fa fa-briefcase',
            order: 10,
          },
        });
  }

})();
