(function () {
  'use strict';

  angular.module('SIMAZE.pages.municipio', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('municipio', {
          url: '/municipio',
          templateUrl: 'app/pages/municipio/municipio.html',
          title: 'Município',
          sidebarMeta: {
            icon: 'fa fa-bank',
            order: 4,
          },
        });
  }

})();
