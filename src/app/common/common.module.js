import angular from 'angular';
import {ListModule} from './list/list.module';

export const CommonModule = angular
    .module('app.common', [ListModule])
    .name;