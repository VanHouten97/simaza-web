(function () {
  'use strict';

  angular.module('SIMAZE.pages.avancado.usuarios', [
      'SIMAZE.pages.avancado.usuarios.adcionar',
      'SIMAZE.pages.avancado.usuarios.editar',
      'SIMAZE.pages.avancado.usuarios.excluir'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('avancado.usuarios', {
          url: '/usuarios',
          title: 'Usuários',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          sidebarMeta: {
            icon: 'fa fa-briefcase',
            order: 0,
          },
        });
  }

})();
