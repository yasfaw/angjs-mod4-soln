(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider','$qProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider,$qProvider) {
  //added this to deal with unhandled rejection error because of versionof ui-router
  $qProvider.errorOnUnhandledRejections(false)
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/categories.state.template.html',
    controller: 'MenuAppController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categories.items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menu/templates/items.state.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        //console.log(categoryShortName)
        //onsole.log(stateParams)
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
