import angular from 'angular';
import {ListModule} from './list/list.module';
import {DetailsModule} from './details/details.module';
import {AddModule} from './add/add.module';

export const CommonModule = angular
    .module('app.common', [ListModule, AddModule, DetailsModule])
    .name;
