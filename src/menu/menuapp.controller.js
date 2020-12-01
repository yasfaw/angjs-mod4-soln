(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['MenuDataService', 'items'];
function MenuAppController(MenuDataService, items) {
  var mainList = this;
  mainList.items = items;
  mainList.selected=function(val){
    console.log(val);
  };
}

})();
