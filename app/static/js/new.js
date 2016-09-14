$(document).ready(function() {
	function ViewModel() {
		this.title    = ko.observable();
		this.descr    = ko.observable();
		this.client   = ko.observable();
		this.priority = ko.observable();
		this.url      = ko.observable();
		this.prodarea = ko.observable();

		this.submitReq = function() {
			$.ajax({
				type : "POST",
				url  : "/api/request/new",
				contentType: "application/json; charset=utf-8",
				data : ko.toJSON(this),
				dataType : "json",
				success: function(returnedData) {
				//TODO redir to the request
				}
			})
		}
	};

	ko.applyBindings(new ViewModel());
});