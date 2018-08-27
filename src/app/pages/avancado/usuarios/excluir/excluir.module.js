(function () {
  'use strict';

  angular.module('SIMAZE.pages.avancado.usuarios.excluir', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('avancado.usuarios.excluir', {
          url: '/excluir',
          title: 'Excluir Usuário',
          sidebarMeta: {
            icon: 'fa fa-briefcase',
            order: 0,
          },
        });
  }

})();
