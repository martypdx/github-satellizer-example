import template from './link-account.html';

export default {
    template,
    controller
};

controller.$inject = ['$auth', 'tokenService', '$state'];

function controller($auth, tokenService, $state) {
    this.link = () => {
        $auth.authenticate('github')
            .then(res => {
                tokenService.set(res.data.token);
                $state.go('welcome');
            })
            .catch(err => {
                this.error = err;
                console.log(err);
            });
    };
    
}