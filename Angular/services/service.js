AngularApp.service('getProject',function($resource){
	return $resource('http://jsonplaceholder.typicode.com/users',{}, {
        query: { method: 'GET',isArray: true}
    });
});