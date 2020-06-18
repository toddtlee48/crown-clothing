import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD3va7WAB2AnhPokiK35n_K7U66eaglYPE",
        authDomain: "crwn-db-42a5f.firebaseapp.com",
        databaseURL: "https://crwn-db-42a5f.firebaseio.com",
        projectId: "crwn-db-42a5f",
        storageBucket: "crwn-db-42a5f.appspot.com",
        messagingSenderId: "955681525812",
        appId: "1:955681525812:web:bd337f5908431adcb53a61",
        measurementId: "G-ZWTLKTT6MN"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;