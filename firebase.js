// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGvZusXYbftxd9KCPXDmar61WvkO2LLRo",
  authDomain: "be-patissier.firebaseapp.com",
  projectId: "be-patissier",
  storageBucket: "be-patissier.appspot.com",
  messagingSenderId: "887060035948",
  appId: "1:887060035948:web:c6cf58b160ca1ce9ea1b49",
  measurementId: "G-3YV7S788VT"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app()
}
const auth = firebase.auth()

export { auth };
