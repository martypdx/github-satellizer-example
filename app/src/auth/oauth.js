/* global window */

oauth.$inject = ['$authProvider', 'apiHost'];

export default function oauth($authProvider, apiHost) {
    const authPath = '/auth/github';
    
    const url = `${apiHost}${authPath}`;
    $authProvider.github({ 
        clientId: process.env.GITHUB_CLIENT_ID,
        url,
        redirectUri: `${window.location.origin}${authPath}`
    });
}