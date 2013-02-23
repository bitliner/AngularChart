function MainCtrl($scope, $http){
	console.log('ciao')
	$http.get('data/line-chart.json').success(function(result){
		$scope.lineChartYData=result.yData
		$scope.lineChartXData=result.xData
		})
}