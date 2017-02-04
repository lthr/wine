(function (angular) {
  'use strict';

  /*@ngInject*/
  function WineListController() {
    var vm = this;
    vm.propertyName = 'name';
    vm.reverse = false;
    vm.sortBy = function (propertyName) {
      vm.reverse = (vm.propertyName === propertyName)
        ? !vm.reverse
        : false;
      vm.propertyName = propertyName;
    };
  }

  var wineList = {
    bindings: {
      wines: '<'
    },
    templateUrl: './app/components/list/list.component.html',
    controller: WineListController
  };

  angular
    .module('WineList', [])
    .component('wineList', wineList);

})(window.angular);
