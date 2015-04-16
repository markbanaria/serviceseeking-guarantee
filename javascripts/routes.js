ssauguarantee.config(function ($routeProvider) {
	$routeProvider 
	.when('/option1', {
        controller: 'option1controller',
        templateUrl: 'partials/option1.html' 
    })
    .when('/option2', {
        controller: 'option2controller',
        templateUrl: 'partials/option2.html' 
    })
    .when('/option3', {
        controller: 'option3controller',
        templateUrl: 'partials/option3.html' 
    })
	.otherwise( {redirectTo: '/option3'} )

});