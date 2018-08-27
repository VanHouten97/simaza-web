(function () {
  'use strict';

  angular.module('SIMAZE.pages.pncd', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('pncd', {
          url: '/pncd',
          templateUrl: 'app/pages/pncd/pncd.html',
          title: 'PNCD',
          sidebarMeta: {
            icon: 'fa fa-search',
            order: 5,
          },
        });
  }

})();
