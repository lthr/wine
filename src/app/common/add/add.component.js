import template from './add.html';

export const AddComponent = {
  bindings: {
    wines: '<'
  },
  template,
  controller: class AddComponent {
    constructor(AddService) {
      this.addService = AddService;
    }

    $onInit() {
      this.pageLoad = true;
    }

    searchWine() {
      this.noSearchResults = false;
      if (this.query) {
        this.pageLoad = false;
        this.addService
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
    }

    addWine(wine) {
      this.wineId = new Date().valueOf();
      this.addService.addWine({
        'id': this.wineId,
        'name': wine.Name,
        'vineyard': wine.Vineyard.Name,
        'vintage': wine.Vintage,
        'label': wine.Labels[0].Url
      });
      this.query = '';
      this.searchResult = [];
      this.wineAdded = true;
    }
  }
};

AddComponent.$inject = ['AddService'];