import angular from 'angular';
import './scss/main.scss';
// picks up index.js from components and services folder
import components from './components';
import services from './services';

// bring in 3rd party modules
import animate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import satellizer from 'satellizer';

// need this for old $stateChanged events,
// however, we need to manually grab the module 
// from angular (see below) as it is not 
// exported from this import 
import 'angular-ui-router/release/stateEvents';

import resource from 'angular-resource';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

// route, http config and auth setup
import http from './auth/http';
import routes from './routes';
import auth from './auth/auth';
import oauth from './auth/oauth';

const app = angular.module('myApp', [
    components,
    services,
    animate,
    uiRouter,
    defaultRoute,
    angular.module('ui.router.state.events').name,
    resource,
    dialog,
    satellizer
]);

app.filter('titleCase', function() {
    return function titleCaseFilter(input) {
        if(!input) return '';
        return input[0].toUpperCase() + input.slice(1);
    };
});

// change to .constant from .value because we
// need the apiUrl in the OAuth .config call
const host = process.env.API_HOST || '';
app.constant('apiHost', host);
app.constant('apiUrl', `${host}/api`);

// http interceptor for token goodness
app.config(http);
// ui-router setup:
app.config(routes);
// satellizer setup for oauth
app.config(oauth);

// state change event hook to check for auth:
app.run(auth);
