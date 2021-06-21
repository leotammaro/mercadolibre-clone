import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDJFFV5NfUMVfbAxRxx20NloEHuUgsOoSA",
    authDomain: "mercadolibre-clone.firebaseapp.com",
    projectId: "mercadolibre-clone",
    storageBucket: "mercadolibre-clone.appspot.com",
    messagingSenderId: "879936349970",
    appId: "1:879936349970:web:d2ce44cc8ef91fe08535cb",
    measurementId: "G-26YLHCMGL6"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()
 

  