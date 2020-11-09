import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCwndUhBErAr6O41hbgjFw_EkHPfX6Moik",
  authDomain: "kiddoz-82c12.firebaseapp.com",
  databaseURL: "https://kiddoz-82c12.firebaseio.com",
  projectId: "kiddoz-82c12",
  storageBucket: "kiddoz-82c12.appspot.com",
  messagingSenderId: "277116161516",
  appId: "1:277116161516:web:d385e7069313b21c9cc4c9",
  measurementId: "G-0C8M2L1P8W"
};

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      } 
    }
    
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;