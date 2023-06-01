/* import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */

import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5beyTSvAbi0xXN65w6BxDNwfBqzkKnQg",
    authDomain: "ibanez-ecommerce.firebaseapp.com",
    projectId: "ibanez-ecommerce",
    storageBucket: "ibanez-ecommerce.appspot.com",
    messagingSenderId: "341377405483",
    appId: "1:341377405483:web:e25d04a85437cd9806906e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)