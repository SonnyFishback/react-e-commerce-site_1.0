import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA8BN5POSc1twEs0nBnd3Uh01nI4dvuIRQ",
    authDomain: "crwn-db-4ec5e.firebaseapp.com",
    projectId: "crwn-db-4ec5e",
    storageBucket: "crwn-db-4ec5e.appspot.com",
    messagingSenderId: "598528341499",
    appId: "1:598528341499:web:cb46d68baef694936c475e",
    measurementId: "G-SL7RZVW2SL"
  };


export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if(!userAuth) return;
    // Getting user ref
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // Get snapshot of curent user
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log("error creating user", error.message)
        }
    }
    
    return userRef;
}


//   firebase.initializeApp(config);
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;