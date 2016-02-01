(function(){
	var app = angular.module('app.main');

	app.controller("MainController", function ($scope, $mdSidenav, $log) {
        $log.info('App started');

        var vm = this;

        vm.toogle = function () {
        	$mdSidenav('left')
	        .toggle()
	        .then(function () {
	            $log.debug("Toggle left is done");
	        });
        }
	});
})();