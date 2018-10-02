app.controller("billingController", function($scope) {

});

app.controller("billingFilterController", function($scope) {
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
		}
	});

	bFilter.changeMode(0);
});