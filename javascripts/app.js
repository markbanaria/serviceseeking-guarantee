(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);

var ssauguarantee = angular.module('ssauguarantee', ['ngRoute']);

ssauguarantee.controller('maincontroller', function($scope) {

}).

controller('option1controller', function($scope) {
	
}).

controller('option2controller', function($scope) {

}).

controller('option3controller', function($scope) {

}).

directive('navbarsection', function() {
	return {
		restrict: "E",
		templateUrl: 'partials/navbar.html',
		scope: {option1open: "=", option2open: "=", option3open: "="},
		controller: function($scope) {
		}
	}
}).

directive('headerpanel', function() {
	return {
		restrict: "E",
		templateUrl: 'partials/headerpanel.html',
		scope: {option1open: "=", option2open: "=", option3open: "="},
		controller: function($scope) {
		}
	}
}).

directive('formpanel', function() {
	return {
		restrict: "E",
		templateUrl: 'partials/formpanel.html',
		scope: {option1open: "=", option2open: "=", option3open: "="},
		controller: function($scope) {
			$scope.ishiring = false;
			$scope.ishiringother = false;
			$scope.isnothiring = false;
			$scope.showconfirmation = false;
			$scope.alt1 = false;
			$scope.alt2 = false;
			$scope.alt3 = false;
			$scope.alt4 = false;
			$scope.alt5 = false;
			$scope.handleSubmit = function() {
				if($scope.ishiring||$scope.ishiringother) {
					$scope.showconfirmation = true;
					$('#formpanel').goTo();
				}
			}

			$scope.deactivateAll = function() {				
				$scope.alt1 = false;
				$scope.alt2 = false;
				$scope.alt3 = false;
				$scope.alt4 = false;
				$scope.alt5 = false;
			}
		}
	}
}).

directive('detailspanel', function() {
	return {
		restrict: "E",
		templateUrl: 'partials/detailspanel.html',
		scope: {option1open: "=", option2open: "=", option3open: "="},
		controller: function($scope) {
		}
	}
}).

directive('contactpanel', function() {
	return {
		restrict: "E",
		templateUrl: 'partials/contactpanel.html',
		scope: {option1open: "=", option2open: "=", option3open: "="},
		controller: function($scope) {
		}
	}
}).

directive('footersection', function() {
	return {
		restrict: "E",
		templateUrl: 'partials/footer.html',
		scope: {},
		controller: function($scope) {
		}
	}
});

