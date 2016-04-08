//Define Controller3
myApp.controller('addItemController', function($scope, memoService) {
    ons.createPopover('popover.html').then(function(popover) {
		$scope.popover = popover;
	});
	$scope.$on('$destroy',function(){
		$scope.popover.destroy();
	});

	$scope.addItem = function() {
		if (typeof($scope.item_name) != 'undefined' && $scope.item_name !== '') {
			var category = $scope.item_category;
			if (typeof(category) == 'undefined' || category === '') {
				category = ' ';
			}
			category = category.replace(/\s{2,}/g, ' ');
			var newItem = new Item($scope.item_name, category, $scope.item_description);
			memoService.addMemo(newItem);
			memoService.addToView(newItem);
			$scope.myNavigator.popPage();
		} else {
			$scope.popover.show('#input-name');
		}
	};
});
