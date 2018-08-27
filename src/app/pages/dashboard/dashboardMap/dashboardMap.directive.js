(function () {
  'use strict';

  angular.module('SIMAZE.pages.dashboard')
      .directive('dashboardMap', dashboardMap);

  /** @ngInject */
  function dashboardMap() {
    return {
      restrict: 'E',
      controller: 'dashboardMapCtrl',
      templateUrl: 'app/pages/dashboard/dashboardMap/dashboardMap.html'
    };
  }
})();
