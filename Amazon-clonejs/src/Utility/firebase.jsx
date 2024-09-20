import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRfrq6DmirIFSczZ2dBS-p7z31M_VfHFg",
    authDomain: "clone-dc739.firebaseapp.com",
    projectId: "clone-dc739",
    storageBucket: "clone-dc739.appspot.com",
    messagingSenderId: "132179303552",
    appId: "1:132179303552:web:eef3f01d644834f63dda65",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
