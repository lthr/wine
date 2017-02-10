import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {ListComponent} from './list.component';
import {ListService} from './list.service';

export const ListModule = angular
    .module('list', [uiRouter])
    .component('wineList', ListComponent)
    .service('ListService', ListService)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider.state('wines', {
            url: '/wines',
            component: 'wineList',
            resolve: {
                /*@ngInject*/
                wines: ListService => ListService.getAllWine()
            }
        });
    })
    .name;