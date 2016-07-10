import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBkarq6uoTO10kMmMm26wMyZ74VvKMRzk0',
  databaseURL: 'https://blog-e4ea6.firebaseio.com',
  authDomain: 'blog-e4ea6.firebaseapp.com',
};

Firebase.initializeApp(config);

export default Firebase;
