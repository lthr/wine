import template from './details.html';

export const DetailsComponent = {
  bindings: {
    wine: '<'
  },
  template,
  controller: class DetailsComponent {
    constructor(DetailsService, $state) {
      this.detailsService = DetailsService;
      this.$state = $state;
    }

    updateComment(id, comments) {
      this
          .detailsService
          .updateComment(id, comments);
      this
          .$state
          .go('wines');
    }

    deleteWine(id) {
      this
          .detailsService
          .deleteWine(id);
      this
          .$state
          .go('wines');
    }
  }
};

DetailsComponent.$inject = ['DetailsService', '$state'];
