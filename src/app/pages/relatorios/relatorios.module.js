(function () {
  'use strict';

  angular.module('SIMAZE.pages.relatorios', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('relatorios', {
          url: '/relatorios',
          templateUrl: 'app/pages/relatorios/relatorios.html',
          title: 'Relatórios',
          sidebarMeta: {
            icon: 'fa fa-file-text-o',
            order: 9,
          },
        });
  }

})();
