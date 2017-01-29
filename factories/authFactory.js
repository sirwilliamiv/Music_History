app.factory('authFactory', ($q)=> {
  return {
    login(email, pass) {
      return $q.resolve(firebase.auth().signInWithEmailAndPassword(email,pass).then((data) =>{
        console.log(data.uid)
        return UID = data.uid
      }))
    },

    createUser(first,last,email,pass) {
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, pass))

    },
    getUser () {
      return $q((resolve, reject) => {
        // const unsubscribe = firebase.auth().onAuthStateChanged(user) => {
        //   unsubscribe()
          if (user) {
            resolve(user)
          } else {
            reject()
          }

      })
    }
  }
})
