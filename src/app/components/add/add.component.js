(function (angular) {
  'use strict';

  /*@ngInject*/
  function WineAddController(WineService) {
    var vm = this;
    vm.pageLoad = true;
    vm.searchWine = function () {
      vm.noSearchResults = false;
      if (vm.query) {
        vm.pageLoad = false;
        WineService
          .searchWine(vm.query)
          .then(function (res) {
            vm.searchResult = res.data.Products.List;
            vm.noSearchResults = !vm.searchResult.length;
          }, function (err) {
            //TODO add error handling
            console.log('Error: ', err);
          });
      } else {
        vm.pageLoad = true;
      }
    };

    vm.addWine = function (wine) {
      vm.wineId = new Date().valueOf();
      WineService.addWine({'id': vm.wineId, 'name': wine.Name, 'vineyard': wine.Vineyard.Name, 'vintage': wine.Vintage, 'label': wine.Labels[0].Url});
      vm.query = '';
      vm.searchResult = [];
      vm.wineAdded = true;
    };
  }

  var wineAdd = {
    bindings: {
      wines: '<'
    },
    templateUrl: './app/components/add/add.component.html',
    controller: WineAddController
  };

  angular
    .module('WineAdd', [])
    .component('wineAdd', wineAdd);

})(window.angular);
