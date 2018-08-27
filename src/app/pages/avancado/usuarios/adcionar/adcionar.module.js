(function () {
  'use strict';

  angular.module('SIMAZE.pages.avancado.usuarios.adcionar', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('avancado.usuarios.adcionar', {
          url: '/adcionar',
          templateUrl: 'app/pages/avancado/usuarios/adcionar/adcionar.html',
          controller: 'adicionarUsuarioCtrl',
          title: 'Adcionar Usuário',
          sidebarMeta: {
            icon: 'fa fa-briefcase',
            order: 0,
          },
        });
  }

})();
