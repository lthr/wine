(function (angular) {
  'use strict';

  var Routes = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/wines');

    var states = [
      {
        name: 'wines',
        url: '/wines',
        component: 'wineList',
        resolve: {
          wines: function (WineService) {
            return WineService.getAllWine();
          }
        }
      }, {
        name: 'details',
        url: '/wines/{wineId}',
        component: 'wineDetails',
        resolve: {
          wine: function (WineService, $transition$) {
            return WineService.getWine($transition$.params().wineId);
          }
        }
      },
      {
        name: 'add',
        url: '/add',
        component: 'wineAdd',
        resolve: {
          wines: function (WineService) {
            return WineService.getAllWine();
          }
        }
      }
    ];

    states.forEach(function (state) {
      $stateProvider.state(state);
    });
  };

  angular.module('routes', [])
      .config(Routes);

})(window.angular);
