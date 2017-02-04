(function (angular) {
  'use strict';

  /*@ngInject*/
  function Routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/wines');

    var states = [
      {
        name: 'wines',
        url: '/wines',
        component: 'wineList',
        resolve: {
          wines:/*@ngInject*/
          function (WineService) {
            return WineService.getAllWine();
          }
        }
      }, {
        name: 'details',
        url: '/wines/{wineId}',
        component: 'wineDetails',
        resolve: {
          wine:/*@ngInject*/
          function (WineService, $transition$) {
            return WineService.getWine($transition$.params().wineId);
          }
        }
      }, {
        name: 'add',
        url: '/add',
        component: 'wineAdd'
      }
    ];

    states.forEach(function (state) {
      $stateProvider.state(state);
    });
  }

  angular
    .module('routes', [])
    .config(Routes);

})(window.angular);
