export class ListService {

    constructor($localStorage) {
        this.$localStorage = $localStorage;
    }

    getAllWine() {
        if (!this.$localStorage.wines) {
            this.$localStorage.wines = [];
        }
        return this.$localStorage.wines;
    }

}

ListService.$inject = ['$localStorage'];