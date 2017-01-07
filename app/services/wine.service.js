(function (angular) {
  'use strict';

  var WineService = function ($http, $localStorage, wineApi) {
    return {
      getAllWine: function () {
        return $localStorage.wines || [];
      },

      addWine: function (wine) {
        this.getAllWine().push(wine);
      },

      getWine: function (id) {
        return this.getAllWine().filter(function (wine) {
          return wine.id === Number(id);
        })[0];
      },

      searchWine: function (query) {
        var url = wineApi.url + query + wineApi.params + wineApi.apiKey;
        return $http.get(url);
      },

      updateComment: function (id, comments) {
        var wines = this.getAllWine();
        for (var i = wines.length - 1; i >= 0; i--) {
          if (wines[i].id == id) {
            $localStorage.wines[i].comments = comments;
          }
        }
      },

      deleteWine: function (id) {
        var wines = this.getAllWine();
        for (var i = wines.length - 1; i >= 0; i--) {
          if (wines[i].id == id) {
            wines.splice(i, 1);
          }
        }
      }
    };
  };

  angular.module('app')
      .service('WineService', WineService);

})(window.angular);
