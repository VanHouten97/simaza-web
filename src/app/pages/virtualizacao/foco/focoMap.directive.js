(function () {
  'use strict';

  angular.module('SIMAZE.pages.virtualizacao')
      .directive('focoMap', focoMap);

  /** @ngInject */
  function focoMap() {
    return {
      restrict: 'E',
      controller: 'focoMapCtrl',
      templateUrl: 'app/pages/virtualizacao/foco/foco.html'
    };
  }
})();
