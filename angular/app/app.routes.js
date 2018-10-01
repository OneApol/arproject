app.config(["$routeProvider", function($routeProvider) {
	
	$routeProvider

    .when("/accounting/billing", {
    	templateUrl : "/app/components/accounting/billing/accounting.billingView.html",
        controller: "billingController"
    })

    .when("/accounting/collection", {
    	templateUrl : "/app/components/accounting/collection/accounting.collectionView.html",
        controller: "collectionController"
    })

	.when("/accounting", {
        redirectTo: "/accounting/billing"
    })

    .otherwise({
    	redirectTo: "/accounting/billing"
    })

}]);
