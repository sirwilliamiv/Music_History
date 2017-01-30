app.controller('userController', function($scope, $location,authFactory, getDataFactory){

console.log("user")
//addsong
$scope.addSong = () => {

  getDataFactory.addSong($scope.title, $scope.artist, $scope.album, $scope.length)
  .then(() => console.log('Much SUCCESS!')).catch((error) => console.log(error))
}
$scope.logout = () => {
  authFactory.logout().then(()=> alert('youloggedout'))
}








//materialize
  $('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { console.log('Open'); }, // Callback for Collapsible open
    onClose: function(el) { console.log('Closed'); } // Callback for Collapsible close
  });

  $('#addSongButton').click(() => {
  $('#addSong').modal('open')
})

   $('#addSong').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .3, // Opacity of modal background
      inDuration: 700, // Transition in duration
      outDuration: 700, // Transition out duration
      startingTop: '0%', // Starting top style attribute
      endingTop: '20%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.

        console.log(modal, trigger);
      },
      complete: function() { console.log('Closed'); } // Callback for Modal close
    }
  );
})
