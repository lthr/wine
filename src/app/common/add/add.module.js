import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {AddComponent} from './add.component';
import {AddService} from './add.service';

export const AddModule = angular
    .module('add', [uiRouter])
    .component('wineAdd', AddComponent)
    .service('AddService', AddService)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider.state('add', {
            name: 'add',
            url: '/add',
            component: 'wineAdd'
        });
    })
    .name;