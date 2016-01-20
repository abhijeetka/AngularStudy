AngularApp.controller('FirstController',function($scope,dashboard,getProject){
	var scope = $scope;
	console.log('controller Caller : FirstController');
	console.log(dashboard.title); 	
 	scope.title = dashboard.title;
 	scope.description = dashboard.description;
 	console.log('From Controller : ' + getProject.query());
 	scope.projects = getProject.query();
});