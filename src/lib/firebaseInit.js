import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAZCR8RjntMZ_UbjNz3-zmBSC71S4iW94g',
  databaseURL: 'https://nodecasts-1271.firebaseio.com',
  authDomain: 'nodecasts-1271.firebaseapp.com'
}

Firebase.initializeApp(config)

Firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('user is signed in')
  } else {
    console.log('user is not signed in')
  }
})

export default Firebase
