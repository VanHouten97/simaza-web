(function () {
  'use strict';

  angular.module('SIMAZE.pages.virtualizacao')
      .directive('agentesMap', agentesMap);

  /** @ngInject */
  function agentesMap() {
    return {
      restrict: 'E',
      controller: 'agentesMapCtrl',
      templateUrl: 'app/pages/virtualizacao/agentes/agentes.html'
    };
  }
})();
