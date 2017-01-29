(function (angular) {
  'use strict';

  var wineList = {
    bindings: {
      wines: '<'
    },
    templateUrl: './app/components/list/list.component.html',
    controller: function () {
      var vm = this;
      vm.propertyName = 'name';
      vm.reverse = false;
      vm.sortBy = function (propertyName) {
        vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
        vm.propertyName = propertyName;
      };
    }
  };

  angular.module('WineList', [])
      .component('wineList', wineList);

})(window.angular);
