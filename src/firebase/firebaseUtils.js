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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
