(function() {
    'use strict';

    angular.module('SIMAZE.pages.equipe')
        .directive('equipeMembros', equipeMembros);

    /** @ngInject */
    function equipeMembros() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/equipe/membros/membros.html',
            controller: 'equipeMembrosCtrl'
        }
    }
})();
