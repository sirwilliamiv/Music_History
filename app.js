const app = angular.module('musicHistory',['ngRoute'])
.config(($routeProvider, $locationProvider) => {
   // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyB_4xXN21qBtcnFEvzsScN46H5IRzynd9I",
    authDomain: "music-history-64fd9.firebaseapp.com",
    databaseURL: "https://music-history-64fd9.firebaseio.com",
    storageBucket: "music-history-64fd9.appspot.com",
    messagingSenderId: "668561100686"
  })

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
