// config.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTl0RxxaO6DXYYYEr-jbQBQIWs1CkKC0Y",
  authDomain: "fitflux-b7e65.firebaseapp.com",
  projectId: "fitflux-b7e65",
  storageBucket: "fitflux-b7e65.appspot.com",
  messagingSenderId: "542669072167",
  appId: "1:542669072167:web:f86bc4d4bb7d0125122b02",
  measurementId: "G-D6N88DCKE7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
