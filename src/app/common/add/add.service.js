export class AddService {
  constructor($http, $localStorage, WINE_API) {
    this.$http = $http;
    this.$localStorage = $localStorage;
    this.WINE_API = WINE_API;
  }

  getAllWine() {
    if (!this.$localStorage.wines) {
      this.$localStorage.wines = [];
    }
    return this.$localStorage.wines;
  }

  searchWine(query) {
    const url = this.WINE_API.url + query + this.WINE_API.params + this.WINE_API.apiKey;
    return this
        .$http
        .get(url);
  }

  addWine(wine) {
    this
        .getAllWine()
        .push(wine);
  }
}

AddService.$inject = ['$http', '$localStorage', 'WINE_API'];