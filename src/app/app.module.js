import angular from 'angular';
import ngStorage from 'ngstorage';
import uiRouter from 'angular-ui-router';
import {AppComponent} from './app.component';
import {CommonModule} from './common/common.module';
import {ConstantsModule} from './config/constants.module';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

const config = ($locationProvider, $urlRouterProvider) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/wines');
};

config.$inject = ['$locationProvider', '$urlRouterProvider'];

export const AppModule = angular
    .module('app', [CommonModule, ConstantsModule, uiRouter, ngStorage.name])
    .component('app', AppComponent)
    .config(config)
    .name;