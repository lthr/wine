const WINE_API = {
  'url': 'http://services.wine.com/api/beta2/service.svc/json/catalog?search=',
  'params': '&sort=name|ascending&filter=categories(490)&size=100&apikey=',
  'apiKey': 'a80b53bd62ffc8a2876466d4d44b6bce'
}

export const ConstantsModule = angular
  .module('constants', [])
  .constant('WINE_API', WINE_API)
  .name;
