export class DetailsService {
    constructor($localStorage) {
        'ngInject;'
        this.$localStorage = $localStorage;
    }

    getWine(id) {
        return this
            .getAllWine()
            .filter(wine => wine.id === Number(id))[0];
    }

    getAllWine() {
        if (!this.$localStorage.wines) {
            this.$localStorage.wines = [];
        }
        return this.$localStorage.wines;
    }

    updateComment(id, comments) {
        let wines = this.getAllWine();
        for (let i = wines.length - 1; i >= 0; i--) {
            if (wines[i].id == id) {
                this.$localStorage.wines[i].comments = comments;
            }
        }
    }

    deleteWine(id) {
        let wines = this.getAllWine();
        for (let i = wines.length - 1; i >= 0; i--) {
            if (wines[i].id == id) {
                wines.splice(i, 1);
            }
        }
    }

}
