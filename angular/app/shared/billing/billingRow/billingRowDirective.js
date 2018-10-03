app.directive("billingRow", function() {
	return {
		template: "/app/shared/billingRow/billingRowView.html",
		restrict: "E",
		scope: {
			billing: "@",
			index: "=",
			billingSelect: "&"
		}
	}
});