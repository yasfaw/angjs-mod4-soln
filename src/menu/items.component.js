(function () {
'use strict';

angular.module('MenuApp')
.component('item', {
  templateUrl: 'src/menu/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
