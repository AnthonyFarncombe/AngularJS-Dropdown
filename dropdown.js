var app = angular.module("fc", []);

app.directive('fcInputDropdown', [function() {
  return {
    restrict: 'A',
    scope: {
    	fcInputDropdownId: '='
    },
    link: function(scope, element, attrs, ctrl, transclude) {
      var links = '<a href="#">Link 1</a><a href="#">Link 2</a>';
      var wrapper = angular.element('<div class="fc-dropdown"><div class="fc-dropdown-content">' + links + '{{fcInputDropdownId}}</div></div>');

      element.after(wrapper);
      wrapper.prepend(element);

      scope.$on('$destroy', function() {
        wrapper.after(element);
        wrapper.remove();
      });
    }
  };
}]);

