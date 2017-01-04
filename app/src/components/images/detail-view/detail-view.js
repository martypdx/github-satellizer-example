import template from './detail-view.html';
import styles from './detail-view.scss';

export default {
    template,
    bindings: {
        images: '<'
    },
    require: {
        parent: '^album'
    },
    controller() {
        this.styles = styles;

        this.sort = '';
        this.order = false;

        this.orderBy = property => {
            if (this.sort === property) {
                this.order = !this.order;
            }
            else {
                this.sort = property;
                this.order = false;
            }
        };
    }
};