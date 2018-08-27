(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .controller('indicePredialCtrl', indicePredialCtrl);

    /** @ngInject */
    function indicePredialCtrl($scope) {
        $scope.predial = [
            {
                data: "set/16",
                aegypti: 0.97,
                albopictus: 0.83
            },
            {
                data: "out/16",
                aegypti: 1,
                albopictus: 0.9
            },
            {
                data: "nov/16",
                aegypti: 1.5,
                albopictus: 0.97
            },
            {
                data: "dez/16",
                aegypti: 1.9,
                albopictus: 0.95
            },
            {
                data: "jan/17",
                aegypti: 1.86,
                albopictus: 1
            },
            {
                data: "fev/17",
                aegypti: 2.02,
                albopictus: 1.74
            },
            {
                data: "mar/17",
                aegypti: 2.6,
                albopictus: 1.5
            },
            {
                data: "abr/17",
                aegypti: 3.2,
                albopictus: 2.9
            },
            {
                data: "mai/17",
                aegypti: 2.7,
                albopictus: 3.98
            },
            {
                data: "jun/17",
                aegypti: 1.95,
                albopictus: 2.01
            },
            {
                data: "jul/17",
                aegypti: 1.62,
                albopictus: 2
            },
            {
                data: "ago/17",
                aegypti: 1.04,
                albopictus: 1.76
            },
            {
                data: "set/17",
                aegypti: 0.96,
                albopictus: 1.8
            }
        ];

        $scope.getColor = function(item) {
            if (item < 1) {
                return "#5cb85c";
            } else if (item < 3.5) {
                return "#f0ad4e"
            } else {
                return "#d9534f";
            }
        }
    }
})();
