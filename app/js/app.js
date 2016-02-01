(function(){
	var app = angular.module('app', [ 
		'ngMaterial', 
		'ngMdIcons',
		'ui.router',
		'app.main' 
	]);

	app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {		
		$urlRouterProvider.when("", "/home");
      	$urlRouterProvider.when("/", "/home");

		$stateProvider

			.state({
                name: 'app',
                abstract: true,
                url: '/',
                templateUrl : 'app/templates/main.html',
                controller : 'MainController as vm',
                resolve: {
                	something: function () {
                		console.log('Route has been setting')
                		return {};
                	}
                }
            })
            .state({
                name: 'app.home',
                url: 'home',
                templateUrl : 'app/templates/samples/app.home.html',
                 resolve: {
                	something: function () {
                		console.log('Home route')
                		return {};
                	}
                }
            });

        console.log('States settings');

        $urlRouterProvider.otherwise('/home');

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
	}]);
})();