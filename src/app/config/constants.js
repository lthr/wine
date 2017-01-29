(function (angular) {
  'use strict';

  angular.module('constants', [])
      .constant(
          'wineApi', {
            'url': 'http://services.wine.com/api/beta2/service.svc/json/catalog?search=',
            'params': '&sort=name|ascending&filter=categories(490)&size=100&apikey=',
            'apiKey': 'a80b53bd62ffc8a2876466d4d44b6bce'
          }
      )

})(window.angular);