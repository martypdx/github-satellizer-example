import template from './add-new.html';
import styles from  './add-new.scss';

export default {
    template,
    transclude: true,
    bindings: {
        _fields: '@fields',
        add: '<',
        inline: '@'
    },
    controller
};

function controller() {
    this.styles = styles;

    this.submit = () => {
        this.add();
    };
}