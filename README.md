# OAuth

## Agenda

* Misc
    * env variables
* OAuth
    * Why?
        * Auth
        * Integration with 3rd party data
            * Many sites offer direct client access
            * You can also access via the server
                * token's are long-lived
    * `satellizer` 
        * npm package for client-side login
        * [examples](https://github.com/sahat/satellizer/blob/master/examples/server/node/server.js) for server-side routes
    * For each provider:
        * Create account
        * Add to `$authProvider` in `app.config()`
            * Use `.constant` for `apiUrl`
        * Add user-facing invocation
        * Add server-side code
        * Use `etc/hosts` as necessary...
        * "Link to Existing" scenario
    * Twitter example
        * OAuth
        * Post a Tweet