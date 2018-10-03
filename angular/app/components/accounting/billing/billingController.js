app.controller("BillingController", ["$rootScope", "$scope", function($rootScope, $scope) {
	var bControl = this;

	bControl.billingList = [];

	// this function is responsible for updating what the selected billing is
	bControl.selectBilling = function(index) {
		// $broadcast is used to communicate with the SelectedBillingModalController
		$rootScope.$broadcast("billingControllerSelectEvent", bControl.billingList[parseInt(index)]);
	};

}]);

app.controller("BillingFilterController", ["$scope", function($scope) {
	var bFilter = this;

	bFilter.modes = ["AR no.", "SI no.", "Client Name", "Client TIN"];
	bFilter.modeIndex = 0;
	bFilter.filter = bFilter.modeName = "";

	bFilter.changeMode = function(modeIndex) {
		bFilter.modeName = bFilter.modes[parseInt(modeIndex)];
		bFilter.modeIndex = modeIndex;
		bFilter.filter = "";
	};

	$scope.$watch("bFilter.filter", function(newValue, oldValue) {
		if (newValue !== "") {
			// do service
		} else {
			// do service
		}
	});

	bFilter.changeMode(0);
}]);

app.controller("NewBillingModalController", ["$scope", function($scope) {
	var bNew = this;

	bNew.newBilling = null;

	bNew.reset = function() {
		// clear all values
	};

	bNew.submit = function() {
		// send values via API
	};
}]);

app.controller("SelectBillingModalController", ["$scope", function($scope) {
	var bSelect = this;

	bSelect.selected = null;

	// everytime BillingController's selectBilling() function is invoked,
	// $on makes sure that this controller's 'selected' propert is updated
	$scope.$on("billingControllerSelectEvent", function(event, selectedBilling) {
		bSelect.selected = selectedBilling;
	});

}]);