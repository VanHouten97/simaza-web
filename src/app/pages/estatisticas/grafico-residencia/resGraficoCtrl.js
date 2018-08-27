(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .controller('resGraficoCtrl', resGraficoCtrl);

    /** @ngInject */
    function resGraficoCtrl($scope) {
        var vm2 = this;
        vm2.labels =["Mai", "Jun", "Jul", "Ago", "Set"];
        vm2.data = [
          [65, 59, 90, 81, 56],
          [28, 48, 40, 19, 88]
        ];
        vm2.series = ['Residências Recuperadas', 'Residências Pendentes'];


        vm2.changeData = function () {
          vm2.data[0] = shuffle(vm2.data[0]);
          vm2.data[1] = shuffle(vm2.data[1]);
        };

        function shuffle(o){
          for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
          return o;
        }
    }
})();
