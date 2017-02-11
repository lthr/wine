import angular from 'angular';
import ngStorage from 'ngstorage';
import uiRouter from 'angular-ui-router';
import {AppComponent} from './app.component';
import {CommonModule} from './common/common.module';
import {ConstantsModule} from './config/constants.module';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

export const AppModule = angular
    .module('app', [CommonModule, ConstantsModule, uiRouter, ngStorage.name])
    .component('app', AppComponent)
    .config(($locationProvider, $urlRouterProvider) => {
        'ngInject';
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/wines');
    })
    .name;