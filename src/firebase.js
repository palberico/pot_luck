import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBNSuXPTnwQrVBaRIRzBZ5lhoAcoldNi7E",
    authDomain: "pot-luck-81c0e.firebaseapp.com",
    databaseURL: "https://pot-luck-81c0e.firebaseio.com",
    projectId: "pot-luck-81c0e",
    storageBucket: "pot-luck-81c0e.appspot.com",
    messagingSenderId: "731627423621"
  };
  
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;