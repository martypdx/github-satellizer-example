auth.$inject = [ '$rootScope', 'userService', 'ngDialog', '$state' ];

export default function auth($rootScope, userService, ngDialog, $state) {
    
    $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    
        if (toState.name !== 'welcome' && !userService.isAuthenticated()) {
            event.preventDefault();

            const dialog = ngDialog.open({ 
                template: '<user-auth success="success"></user-auth>',
                plain: true,
                controller: ['$scope', function($scope){
                    $scope.success = function(){
                        dialog.close();
                        return $state.go(toState.name, toParams);
                    };
                }]
            });
            
        }

    });
}