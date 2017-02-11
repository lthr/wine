import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {DetailsComponent} from './details.component';
import {DetailsService} from './details.service';

export const DetailsModule = angular
    .module('details', [uiRouter])
    .component('wineDetails', DetailsComponent)
    .service('DetailsService', DetailsService)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider.state('details', {
            name: 'details',
            url: '/wines/{wineId}',
            component: 'wineDetails',
            resolve: {
                /*@ngInject*/
                wine: (DetailsService, $transition$) => DetailsService.getWine($transition$.params().wineId)
            }
        });
    })
    .name;