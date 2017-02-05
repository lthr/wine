/*@ngInject*/
function WineDetailsController(WineService, $state) {
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

var wineDetails = {
  bindings: {
    wine: '<'
  },
  templateUrl: './app/components/details/details.component.html',
  controller: WineDetailsController
};

angular
  .module('WineDetails', [])
  .component('wineDetails', wineDetails);
