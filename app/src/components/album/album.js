import template from './album.html';
import styles from './album.scss';

export default {
    template,
    bindings: {
        albums: '<',
        album: '<'
    },
    controller   
};

controller.$inject = ['imageService', '$state'];

function controller(imageService, $state) {

    this.styles = styles;

    this.removeAlbum = () => {
        this.album.$remove().then(() => {
            const _id = this.album._id;
            const index = this.albums.findIndex(a => a._id === _id);
            if(index > -1) this.albums.splice(index, 1);
            $state.go('gallery');
        });
    };

    this.tweet = image => {
        imageService.tweet(image)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };

    this.reset = () => {
        this.newImage = {};
    };

    this.reset();

    this.add = () => {
        const album = this.album;
        const image = this.newImage;
        image.album = album._id;
        imageService.add(image)
            .then(saved => {
                album.images.push(saved);
                this.reset();
                // document.activeElement.blur();
            })
            .catch(err => console.error(err));
    };

    this.remove = image => {
        imageService.remove(image._id)
            .then(() => {
                const images = this.album.images;
                const index = images.indexOf(image);
                if(index < 0) return;
                images.splice(index, 1);
            })
            .catch(err => console.error(err));
    };
}