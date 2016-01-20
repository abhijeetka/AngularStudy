var AngularApp = angular.module('SonarQube',['ngRoute','ngResource']);

AngularApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'FirstController',
		templateUrl: 'views/dashboard.html'
	})
	.when('/project',{
		controller: 'ProjectController',
		templateUrl: 'views/project.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

AngularApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);