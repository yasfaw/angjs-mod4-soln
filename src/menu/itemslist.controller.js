(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

// Version with resolving to 1 item based on $stateParams in route config
ItemListController.$inject = ['$scope', 'items'];
function ItemListController($scope, items) {
  var itemList = this;
  itemList.items = items;

}

})();
