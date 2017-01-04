routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
    });

    $stateProvider.state({
        name: 'link',
        url: '/link',
        component: 'linkAccount'
    });

    $urlRouterProvider.otherwise('/');
}