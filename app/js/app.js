(function(){
	var app = angular.module('app', [ 
		'ngMaterial', 
		'ngMdIcons',
		'ui.router',
        'chart.js',
		'app.main',
        'app.dashboard'
	]);

	app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($url, $stater, $location) {		
		$url.when("", "/home");
      	$url.when("/", "/home");

		$stater

			.state({
                name: 'app',
                abstract: true,
                url: '/',
                templateUrl : 'app/templates/menu.html',
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
                templateUrl : 'app/templates/samples/home.html',
                resolve: {
                	something: function () {
                		console.log('Home route')
                		return {};
                	}
                }
            })
            .state({
                name: 'app.dashboard',
                url: 'dashboard',
                templateUrl : 'app/templates/samples/dashboard.html',
                controller: 'DashboardController as vm',
                resolve: {
                    something: function () {
                        console.log('Dashboard route')
                        return {};
                    }
                }
            });

        console.log('States settings');

        $url.otherwise('/home');

        // use the HTML5 History API
        $location.html5Mode(true);
	}]);
})();