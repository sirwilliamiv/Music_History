app.controller('loginController', function($scope, $location){
console.log("login")








$('#loginButton').click(() => {
  $('.modal').modal('open')
})

 $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .3, // Opacity of modal background
      inDuration: 700, // Transition in duration
      outDuration: 700, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '20%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.

        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

})
