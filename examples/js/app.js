angular.module('AngularChartExample',['AngularChart'], function( $routeProvider, $locationProvider ){
	$routeProvider.when('/',{
		templateUrl: './views/charts.html',
		controller: MainCtrl
		})
	})