(function(){
	var app = angular.module('app.main');

	app.controller("MainController", function ($scope, $mdSidenav, $log, $mdMedia) {
        $log.info('App started');

        var vm = this;

        vm.lockleft = false;

        vm.data = [
        	{
        		name: 'Benjamín',
        		email: 'example@email.com'
        	},
        	{
        		name: 'Violeta Yaretzi',
        		email: 'violeta@example.com'
        	}
        ];

        vm.edit = function(data) {
        	alert('Handled from controller with: ' + JSON.stringify(data))
        }

        vm.lockLeftSideNav = function () {
        	vm.lockleft = !vm.lockleft;
        	console.log('L', vm.lockleft)
        }

        vm.toggle = function () {
        	$mdSidenav('left')
	        .toggle()
	        .then(function () {
	            $log.debug("Toggle left is done");
	        });
        }
	});
})();