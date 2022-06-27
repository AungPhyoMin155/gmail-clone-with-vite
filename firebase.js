import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnu1Jl3BhrJKzLm5I5WmmnBl3QYwsUqvI",
    authDomain: "clone-94f3d.firebaseapp.com",
    projectId: "clone-94f3d",
    storageBucket: "clone-94f3d.appspot.com",
    messagingSenderId: "971761352666",
    appId: "1:971761352666:web:151f4273856314019f0ae3"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db ,auth ,provider};