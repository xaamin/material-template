(function(){
    var app = angular.module('app.dashboard');

    app.controller("DashboardController", function ($scope, $mdSidenav, $log, $timeout) {
        $log.info('Dashboard Loaded');

        var vm = this;
        
        $timeout(function() {
            $scope.bar_labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
            $scope.bar_series = ['Series A', 'Series B', 'Series B'];

            $scope.bar_data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 119, 186, 27, 90],
                [128, 48, 20, 150, 58, 27, 30]
            ];

            $scope.line_labels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.line_series = ['Series A', 'Series B', 'Series C', 'Series B', 'Series B', 'Series B', 'Series B', 'Series B', 'Series B', 'Series B', 'Series B', 'Series B'];

            $scope.line_data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90],
                [128, 48, 20, 50, 58, 180, 30],      
                [28, 50, 80, 119, 86, 27, 90],
                [70, 28, 50, 79, 86, 27, 90],
            ];

            $scope.doughnut_labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Others"];
            $scope.doughnut_data = [300, 500, 100, 800];
          
            $scope.pie_labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Others"];
            $scope.pie_data = [300, 100, 100, 250];

            $scope.polar_labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
            $scope.polar_data = [300, 500, 100, 40, 120];
        });
	});
})();