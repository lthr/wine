export class ListService {
    constructor($localStorage) {
        'ngInject;'
        this.$localStorage = $localStorage;
    }
    getAllWine() {
        if (!this.$localStorage.wines) {
            this.$localStorage.wines = [];
        }
        return this.$localStorage.wines;
    }
}
