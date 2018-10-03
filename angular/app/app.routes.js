app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	
	$routeProvider

    .when("/accounting/billing", {
    	templateUrl : "/app/components/accounting/billing/billingView.html",
        controller: "BillingController as bControl"
    })

    .when("/accounting/collection", {
    	templateUrl : "/app/components/accounting/collection/collectionView.html",
        controller: "CollectionController as cControl"
    })

	.when("/accounting", {
        redirectTo: "/accounting/billing"
    })

    .otherwise({
    	redirectTo: "/accounting/billing"
    });

    $locationProvider.html5Mode(true);

}]);
