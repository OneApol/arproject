app.config(["$routeProvider", function($routeProvider) {
	
	$routeProvider
    
    .when("/accounting", {
        templateUrl : "/app/components/accounting/accountingView.html",
        controller: "/app/components/accounting/accountingController.js"
    })

    .otherwise({redirectTo: "/accounting"})

}]);
