(function() {
    'use strict';

    angular.module('SIMAZE.pages.equipe')
        .controller('equipeMembrosCtrl', equipeMembrosCtrl);

    /** @ngInject */
    function equipeMembrosCtrl($scope) {
        $scope.membros = [
            {
                nome: 'Reinaldo Gomes Azevedo',
                nascimento: '16/09/1976',
                telefone: '(31) 3711-2565',
                celular: '(31) 99503-2345',
                email: 'reinaldo.adutra@gmail.com',
                matricula: 'XXX.XXXX-XX',
                foto: 'assets/pictures/reinaldo.jpg'
            },
            {
                nome: 'Luís Americo Abreu',
                nascimento: '23/04/1964',
                telefone: '(31) 3711-2345',
                celular: '(31) 99844-1456',
                email: 'luis.a.abreu@gmail.com',
                matricula: 'XXX.XXXX-XX',
                foto: 'assets/pictures/luiz.jpg'
            },
            {
                nome: 'João Pereira da Silva',
                nascimento: '30/02/1974',
                telefone: '(31) 3711-1646',
                celular: '(31) 9711-9846',
                email: 'joão_pereira@gmail.com',
                matricula: 'XXX.XXXX-XX',
                foto: 'assets/pictures/joao.jpg'
            },
            {
                nome: 'Wesley Camargo Vasconcelos',
                nascimento: '06/08/1989',
                telefone: '(31) 3711-8767',
                celular: '(31) 98654-8454',
                email: 'wesley_c.v@gmail.com',
                matricula: 'XXX.XXXX-XX',
                foto: 'assets/pictures/wesley.jpg'
            }
        ];
    }
})();
