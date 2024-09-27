import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAhm1Vzmmz6-oChvYIJOSlQefonla_7mpU",
    authDomain: "clonejs-a95c9.firebaseapp.com",
    projectId: "clonejs-a95c9",
    storageBucket: "clonejs-a95c9.appspot.com",
    messagingSenderId: "54080218230",
    appId: "1:54080218230:web:6265345c82d3d08cffab57",
    measurementId: "G-LZE9QXFLL4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
