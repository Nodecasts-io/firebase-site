import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAZCR8RjntMZ_UbjNz3-zmBSC71S4iW94g',
  databaseURL: 'https://nodecasts-1271.firebaseio.com',
  authDomain: 'nodecasts-1271.firebaseapp.com'
}

Firebase.initializeApp(config)

export default Firebase
