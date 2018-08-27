(function () {
  'use strict';

  angular.module('SIMAZE.pages.avancado.usuarios.editar', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('avancado.usuarios.editar', {
          url: '/editar',
          title: 'Editar Usuário',
          sidebarMeta: {
            icon: 'fa fa-briefcase',
            order: 0,
          },
        });
  }

})();
