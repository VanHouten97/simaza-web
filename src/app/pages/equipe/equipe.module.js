(function () {
  'use strict';

  angular.module('SIMAZE.pages.equipe', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('equipe', {
          url: '/equipe',
          templateUrl: 'app/pages/equipe/equipe.html',
          title: 'Equipe',
          sidebarMeta: {
            icon: 'fa fa-user',
            order: 2,
          },
        });
  }

})();
