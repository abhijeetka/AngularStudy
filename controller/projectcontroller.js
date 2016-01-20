AngularApp.controller('ProjectController',function($scope,projectInfo){	
	console.log('controller Caller : ProjectController');
	$scope.title = projectInfo.title;
});