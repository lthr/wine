(function (angular) {
  'use strict';

  function WineAddController(WineService) {
    'ngInject';
    this.pageLoad = true;
    this.searchWine = () => {
      this.noSearchResults = false;
      if (this.query) {
        this.pageLoad = false;
        WineService
          .searchWine(this.query)
          .then(res => {
            this.searchResult = res.data.Products.List;
            this.noSearchResults = !this.searchResult.length;
          }, err => {
            //TODO add error handling
            console.log('Error: ', err);
          });
      } else {
        this.pageLoad = true;
      }
    };

    this.addWine = wine => {
      this.wineId = new Date().valueOf();
      WineService.addWine({'id': this.wineId, 'name': wine.Name, 'vineyard': wine.Vineyard.Name, 'vintage': wine.Vintage, 'label': wine.Labels[0].Url});
      this.query = '';
      this.searchResult = [];
      this.wineAdded = true;
    };
  }

  const wineAdd = {
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
