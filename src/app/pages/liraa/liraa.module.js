(function () {
  'use strict';

  angular.module('SIMAZE.pages.liraa', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('liraa', {
          url: '/liraa',
          templateUrl: 'app/pages/liraa/liraa.html',
          title: 'LIRAa',
          sidebarMeta: {
            icon: 'fa fa-cubes',
            order: 6,
          },
        });
  }

})();
