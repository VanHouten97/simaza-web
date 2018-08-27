(function () {
  'use strict';

  angular.module('SIMAZE.pages.virtualizacao')
      .directive('estratoMap', estratoMap);

  /** @ngInject */
  function estratoMap() {
    return {
      restrict: 'E',
      controller: 'estratoMapCtrl',
      templateUrl: 'app/pages/virtualizacao/estrato/estrato.html'
    };
  }
})();
