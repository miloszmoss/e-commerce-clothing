import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA1ohuNNgqkqrqPLzmY3rG2oBWkjmcql8g',
  authDomain: 'e-commerce-clothing-5d08c.firebaseapp.com',
  databaseURL: 'https://e-commerce-clothing-5d08c.firebaseio.com',
  projectId: 'e-commerce-clothing-5d08c',
  storageBucket: '',
  messagingSenderId: '399602988667',
  appId: '1:399602988667:web:ab62fa65fea4ce291fd4de',
  measurementId: 'G-PMCS3WBYEE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
