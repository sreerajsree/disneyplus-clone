import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBPpFFSgrYgvFhlxVXEp6rnabcuBn1xKs",
  authDomain: "disney-acd1a.firebaseapp.com",
  projectId: "disney-acd1a",
  storageBucket: "disney-acd1a.appspot.com",
  messagingSenderId: "1030661905586",
  appId: "1:1030661905586:web:09a73737e221685b37fdab",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore()

  export { db };