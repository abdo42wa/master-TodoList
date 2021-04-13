import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBbJrDwWCbEDcDgFoTzKROV3XfskszfXkw",
    authDomain: "todolist-4f914.firebaseapp.com",
    projectId: "todolist-4f914",
    storageBucket: "todolist-4f914.appspot.com",
    messagingSenderId: "427892921782",
    appId: "1:427892921782:web:3d1e743f68e69735689d17",
    measurementId: "G-RK3KNXS8PZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export const auth = firebase.auth();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export default db;