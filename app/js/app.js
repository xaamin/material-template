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
                views: {
                    '' : {
                        templateUrl : 'app/templates/samples/home.html'
                    },
                    'content@app.home': {
                        templateUrl : 'app/templates/samples/home.content.html'
                    }
                }
            })
            .state({
                name: 'app.dashboard',
                url: 'dashboard',
                views: {
                    '' : {
                        templateUrl : 'app/templates/samples/dashboard.html'
                    },
                    'content@app.dashboard': {
                        templateUrl : 'app/templates/samples/dashboard.content.html',
                        controller: 'DashboardController as vm'
                    }
                }
            });

        console.log('States settings');

        $url.otherwise('/home');

        // use the HTML5 History API
        $location.html5Mode(true);
	}]);

    app.directive('contactItem', function () {
        return {
            restrict: 'E',
            scope: {
                data: '=',
                edit: '&',
            },
            template: '{{data.name}} | {{data.email}} <md-button class="md-raised md-warn" ng-click="edit()">Edit contact</md-button>'
        };
    });

    app.directive('menuToggler', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/directives/menu-toggle.html'
        };
    });
})();