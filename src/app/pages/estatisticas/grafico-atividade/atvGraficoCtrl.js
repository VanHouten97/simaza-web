(function() {
    'use strict';

    angular.module('SIMAZE.pages.estatisticas')
        .controller('atvGraficoCtrl', atvGraficoCtrl);

    /** @ngInject */
    function atvGraficoCtrl($scope, $interval, stopableInterval) {
        var vm = this;
        vm.labels =["Região 1", "Região 2", "Região 3", "Região 4", "Região 5", "Região 6", "Região 7", "Região 8", "Região 9"];
        vm.data = [1, 9, 3, 4, 5, 6, 7, 8, 2].map(function(e){
          return Math.sin(e) * 25 +25;
        });

        stopableInterval.start($interval, function(){
          var tempArray = [];
          var lastElement = vm.data[vm.data.length-1];
          for(var i = vm.data.length-1; i > 0; i--){
           tempArray[i] = vm.data[i-1];
          }
          tempArray[0] = lastElement;
          vm.data = tempArray;
        }, 400)
    }
})();
