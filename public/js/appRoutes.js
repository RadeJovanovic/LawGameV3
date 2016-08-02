angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

        .when('/', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})

		.when('/selector', {
			templateUrl: 'views/selector.html',
			controller: 'selectorController'	
		})
    
        .when('/game', {
			templateUrl: 'views/game.html',
			controller: 'gameController'
		})
    
        .when('/editor', {
			templateUrl: 'views/editor.html',
			controller: 'editorController'
		})

        .when('/stats', {
			templateUrl: 'views/statistics.html',
			controller: 'statsController'
		});
    
	$locationProvider.html5Mode(true);

}]);