(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout','$http']
function MenuDataService($q, $timeout,$http) {
  var service = this;

  // List of shopping items
  var items = [];
  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url:("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function(result){
      //console.log(result.data)
      return result.data
    })

    return response;
  }

  service.getItemsForCategory = function(categoryShortName){
  var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName;
    var response = $http({
      method: "GET",
      url:(url)
    }).then(function(result){
      //console.log(result.data.menu_items)
      return result.data.menu_items
    })

    return response;
  }
}



})();
