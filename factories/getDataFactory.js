app.factory('getDataFactory', ($q, $http, authFactory)=> {
  return {
    addSong(title,artist,album,length) {
      // console.log("addsong",title,artist, album, length)
      return authFactory.getUser().then(user => {
        console.log("addsong",title,artist, album, length)
            // $scope.title, $scope.artist, $scope.album, $scope.length
        return $http.post(`https://music-history-64fd9.firebaseio.com/Songs/.json`,
        {
          uid:user.uid,
          Title: title,
          Artist: artist,
          Album: album,
          Length: length
        })
      })
    },
    // getPlaylist() {},
    // addSong() {},
    // addPlaylist(){},
    // patchSongToPlaylist(){},
    // deleteSong() {}

  }

})
