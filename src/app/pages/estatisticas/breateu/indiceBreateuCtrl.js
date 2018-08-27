(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .controller('indiceBreateuCtrl', indiceBreateuCtrl);

    /** @ngInject */
    function indiceBreateuCtrl($scope) {
        $scope.breateu = [
            {
                data: "set/16",
                aegypti: 0.95,
                albopictus: 0.99
            },
            {
                data: "out/16",
                aegypti: 0.99,
                albopictus: 1.3
            },
            {
                data: "nov/16",
                aegypti: 1.65,
                albopictus: 1.54
            },
            {
                data: "dez/16",
                aegypti: 2.3,
                albopictus: 2.1
            },
            {
                data: "jan/17",
                aegypti: 2,
                albopictus: 1.87
            },
            {
                data: "fev/17",
                aegypti: 1.9,
                albopictus: 1.75
            },
            {
                data: "mar/17",
                aegypti: 2.6,
                albopictus: 2.5
            },
            {
                data: "abr/17",
                aegypti: 3.2,
                albopictus: 2.9
            },
            {
                data: "mai/17",
                aegypti: 3.1,
                albopictus: 3
            },
            {
                data: "jun/17",
                aegypti: 1.7,
                albopictus: 2
            },
            {
                data: "jul/17",
                aegypti: 2,
                albopictus: 2.07
            },
            {
                data: "ago/17",
                aegypti: 1.3,
                albopictus: 1.45
            },
            {
                data: "set/17",
                aegypti: 1,
                albopictus: 1.4
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
