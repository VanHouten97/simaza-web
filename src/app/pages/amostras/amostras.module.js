(function () {
  'use strict';

  angular.module('SIMAZE.pages.amostras', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('amostras', {
          url: '/amostras',
          templateUrl: 'app/pages/amostras/amostras.html',
          title: 'Amostras',
          sidebarMeta: {
            icon: 'fa fa-flask',
            order: 6,
          },
        });
  }

})();
