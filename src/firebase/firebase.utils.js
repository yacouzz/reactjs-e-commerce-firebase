import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrQTXzRLG2zKj3K-mYGyjpfvHc3XQWGYY",
    authDomain: "crwn-db-8ee17.firebaseapp.com",
    databaseURL: "https://crwn-db-8ee17.firebaseio.com",
    projectId: "crwn-db-8ee17",
    storageBucket: "",
    messagingSenderId: "369774482860",
    appId: "1:369774482860:web:dca247d240d9fb9d4f1609"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return ;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot= await userRef.get();

   if(!snapShot.exists){
     const { displayName, email }= userAuth;
     const createAt = new Date();

     try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
     }catch(error){
        console.log('error creating user', error.message);
     }
   }
   return userRef;
  }
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;