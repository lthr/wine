import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {ListComponent} from './list.component';
import {ListService} from './list.service';

const route = ($stateProvider) => {
  $stateProvider.state('wines', {
    url: '/wines',
    component: 'wineList',
    resolve: {
      wines: ['ListService', (ListService) => ListService.getAllWine()]
    }
  });
};

route.$inject = ['$stateProvider'];

export const ListModule = angular
    .module('list', [uiRouter])
    .component('wineList', ListComponent)
    .service('ListService', ListService)
    .config(route)
    .name;