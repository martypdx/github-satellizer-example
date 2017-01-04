userService.$inject = ['tokenService', '$http', 'apiHost'];
// tokenService -> handles the storage of the token
// $http -> calls for user verify, auth, etc.
// apiUrl -> baseUrl for http calls to the server

export default function userService(token, $http, apiHost) {

    const apiUrl = `${apiHost}/auth`;

    const current = token.get();
    if (current) {
        $http
            .get(`${apiUrl}/verify`)
            .catch(() => token.remove());
    }
    
    function credential(endpoint) {
        return (credentials) => {
            return $http.post(`${apiUrl}/${endpoint}`, credentials)
            .then(result => {
                token.set(result.data.token);
            })
            .catch(err => {
                throw err.data; 
            });
        };
    }

    return {
        // do we have a token?
        isAuthenticated() {
            // instead of returning the token,
            return !!token.get();
        },
        // remove the token
        logout() {
            token.remove();
        },
        // call API and set token
        signin: credential('signin'),
        // call API and set token
        signup: credential('signup')
    };
}