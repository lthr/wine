import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {DetailsComponent} from './details.component';
import {DetailsService} from './details.service';

const wineResolve = (DetailsService, $transition$) => DetailsService.getWine($transition$.params().wineId);
wineResolve.$inject = ['DetailsService', '$transition$'];

const route = ($stateProvider) => {
  $stateProvider.state('details', {
    name: 'details',
    url: '/wines/{wineId}',
    component: 'wineDetails',
    resolve: {
      wine: wineResolve
    }
  });
};

route.$inject = ['$stateProvider'];

export const DetailsModule = angular
    .module('details', [uiRouter])
    .component('wineDetails', DetailsComponent)
    .service('DetailsService', DetailsService)
    .config(route)
    .name;