import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {AddComponent} from './add.component';
import {AddService} from './add.service';

const route = ($stateProvider) => {
  $stateProvider.state('add', {
    name: 'add',
    url: '/add',
    component: 'wineAdd'
  });
};

route.$inject = ['$stateProvider'];

export const AddModule = angular
    .module('add', [uiRouter])
    .component('wineAdd', AddComponent)
    .service('AddService', AddService)
    .config(route)
    .name;