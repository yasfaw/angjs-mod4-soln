(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menu/templates/categories.template.html',
  controller: ChangeColorOfSelectedItem,
  bindings: {
    items: '<'
  }
});

})();


ChangeColorOfSelectedItem.$inject=['$rootScope']
function ChangeColorOfSelectedItem ($rootScope){
  var $ctrl = this;
  $ctrl.selected = function(index){
    $ctrl.row = index;
  }
}
