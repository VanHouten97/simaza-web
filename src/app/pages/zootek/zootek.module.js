(function () {
  'use strict';

  angular.module('SIMAZE.pages.zootek', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('zootek', {
          url: '/zootek',
          templateUrl: 'app/pages/zootek/zootek.html',
          title: 'Zootek',
          sidebarMeta: {
            icon: 'fa fa-newspaper-o',
            order: 11,
          },
        });
  }
})();
