import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBd-egAbx9xMTp2IoI6RLktI1fOLBW1a0I",
    authDomain: "crwn-db-6c3af.firebaseapp.com",
    databaseURL: "https://crwn-db-6c3af.firebaseio.com",
    projectId: "crwn-db-6c3af",
    storageBucket: "crwn-db-6c3af.appspot.com",
    messagingSenderId: "1085340606708",
    appId: "1:1085340606708:web:24957c4c3d0f5702c9bea1",
    measurementId: "G-S7J1CHFGH9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
