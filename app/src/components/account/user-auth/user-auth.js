import template from './user-auth.html';

export default {
    template,
    bindings: { success: '<' },
    controller
};

controller.$inject = ['$auth', 'tokenService'];

function controller($auth, tokenService) {
    this.action = 'signin';

    this.authenticate = provider => {
        $auth.authenticate(provider)
            .then(res => {
                tokenService.set(res.data.token);
                this.success();
            })
            .catch(err => {
                this.error = err;
                console.log(err);
            });
    };
}
