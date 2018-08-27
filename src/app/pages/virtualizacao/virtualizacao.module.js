(function () {
  'use strict';

  angular.module('SIMAZE.pages.virtualizacao', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('virtualizacao', {
          url: '/virtualizacao',
          templateUrl: 'app/pages/virtualizacao/virtualizacao.html',
          title: 'Virtualização',
          sidebarMeta: {
            icon: 'fa fa-map-marker',
            order: 1,
          },
        });
  }

})();
