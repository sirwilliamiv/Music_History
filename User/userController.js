app.controller('userController', function($scope, $location){

console.log("user")

  $('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { console.log('Open'); }, // Callback for Collapsible open
    onClose: function(el) { console.log('Closed'); } // Callback for Collapsible close
  });
})
