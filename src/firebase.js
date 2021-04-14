import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAG8VECUrDsU1rF0hDR-fjpn4nIZ7s-PKg",
    authDomain: "mastertodolist-9e28a.firebaseapp.com",
    projectId: "mastertodolist-9e28a",
    storageBucket: "mastertodolist-9e28a.appspot.com",
    messagingSenderId: "1073204245960",
    appId: "1:1073204245960:web:e516527393865acbf57cfd",
    measurementId: "G-DKQXLDFLYX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // crating function that will store our user into the firestore

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const  userRef = db.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

   if (!snapShot.exists) {
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try {
       await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
       })
     } catch (error) {
        console.log(error);
     }

   }
   return userRef;
  }

  const db = firebaseApp.firestore();

  export const auth = firebase.auth();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export default db;