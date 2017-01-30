app.factory('authFactory', ($q)=> {
  return {
    login(email, pass) {
      console.log("auth", email)
      return $q.resolve(firebase.auth().signInWithEmailAndPassword(email,pass).then((data) =>{
        console.log(data.uid)
        return UID = data.uid
      }))
    },

    createUser(first,last,email,pass) {
      console.log("email", email)
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, pass))

    },
    getUser () {
      return $q((resolve, reject) => {
        // const unsubscribe = firebase.auth().onAuthStateChanged(user) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          unsubscribe()
          if (user) {
            resolve(user)
          } else {
            reject()
          }

        }) //end const unsubscribe
      }) //end return getUser
    } //end getUser
  } //end of return object
}) //end factory
