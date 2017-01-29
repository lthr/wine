(function (angular) {
  'use strict';

  var wineDetails = {
    bindings: {
      wine: '<'
    },
    templateUrl: './app/components/details/details.component.html',
    controller: function (WineService, $state) {
      var vm = this;
      vm.updateComment = function (id, comments) {
        WineService.updateComment(id, comments);
        $state.go('wines');
      };
      vm.deleteWine = function (id) {
        WineService.deleteWine(id);
        $state.go('wines');
      };
    }
  };

  angular.module('WineDetails', [])
      .component('wineDetails', wineDetails);

})(window.angular);
