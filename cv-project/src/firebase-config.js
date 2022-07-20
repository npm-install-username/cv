// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUtKRjnXUcI8UCMSC_423k_-XY4fqfe0U",
  authDomain: "cvbuilder-aff15.firebaseapp.com",
  projectId: "cvbuilder-aff15",
  storageBucket: "cvbuilder-aff15.appspot.com",
  messagingSenderId: "348127036915",
  appId: "1:348127036915:web:453cf618a727d252087e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//Export auth so we can use in other files
export const auth = getAuth(app);
export const db =getFirestore(app)