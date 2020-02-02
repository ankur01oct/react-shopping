import firebase from 'firebase/app'; //we dont need all utils
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBysw-oAthwUJgRmMKmMwURb-k4ZqSWvzo",
    authDomain: "crwndb-eecb2.firebaseapp.com",
    databaseURL: "https://crwndb-eecb2.firebaseio.com",
    projectId: "crwndb-eecb2",
    storageBucket: "crwndb-eecb2.appspot.com",
    messagingSenderId: "429119810361",
    appId: "1:429119810361:web:92c65629519fc40abb96e8",
    measurementId: "G-SDDHL3YCRR"
  };


  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // if exist then, query firestore, gives document ref
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //we do CRUD on docRef
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;