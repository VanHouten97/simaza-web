(function () {
    'use strict';

    angular.module('SIMAZE.theme').factory('apiManager', apiManager);

    /** @ngInject */
    function apiManager() {
        var protocol = location.protocol;
        var host = '//192.168.0.14:3050';
        var baseURL = protocol + host;
        var baseAPI = baseURL + '/api';
        var user = {};

        user.base = baseAPI + '/user';
        user.add = user.base + '/add';

        return {
            user: user
        }
    }

})()
