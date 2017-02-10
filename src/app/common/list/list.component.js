import template from './list.html';

export const ListComponent = {
    bindings: {
        wines: '<'
    },
    template,
    controller: class ListComponent {
        $onInit() {
            this.propertyName = 'name';
            this.reverse = false;
        }
        sortBy(propertyName) {
            this.reverse = (this.propertyName === propertyName)
                ? !this.reverse
                : false;
            this.propertyName = propertyName;
        }
    }
};
