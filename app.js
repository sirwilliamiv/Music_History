const app = angular.module('musicHistory',['ngRoute'])
.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("")
  $routeProvider
  .when('/login', {
    controller: 'loginController',
    templateUrl: '/components/loginView.html',
    resolve: {
      // authentication resolves from factories
    }
  })
  .when('/user', {
    controller: 'userController',
    templateUrl: '/User/userView.html',
    resolve: {
      // resolves for adding/ deleting/ searching
    }
  })

})
