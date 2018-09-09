(function () {
  'use strict';

  angular.module('SIMAZE.pages.avancado.usuarios.adcionar')
      .controller('adicionarUsuarioCtrl', adicionarUsuarioCtrl);

  /** @ngInject */
  function adicionarUsuarioCtrl($scope, $http, apiManager, toastr) {
      var userApi = apiManager.user;
      $scope.user = {};

      $scope.confirmar = function () {
          $scope.user.birth = toDate($scope.user.birth);
          $scope.user.admission = toDate($scope.user.admission);
          if ($scope.user.password !== $scope.user.csenha) {
             return toastr.warning('Senha e confirmação de não conferem');
          }

          $http.post(userApi.add, $scope.user).then(function(success) {
              toastr.success(success.data.data);
          }, function(error) {
              toastr.error(error.data.data.msg);
          });
      };

      $scope.replaceData = function() {
          if ($scope.user.admission.length === 2) {
              $scope.user.admission = $scope.user.admission + '/';
          }
          if ($scope.user.admission.length === 5) {
              $scope.user.admission = $scope.user.admission + '/';
          }
      };

      function toDate(data) {
          var dividido = data.split('/');
          return dividido[2] + '-' + dividido[1] + '-' + dividido[0];
      }
  }

})();
