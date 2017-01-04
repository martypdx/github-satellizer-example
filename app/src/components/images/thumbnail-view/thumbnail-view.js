import template from './thumbnail-view.html';
import styles from './thumbnail-view.scss'; 

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
    }
};