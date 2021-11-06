import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDQEI_aw-4zLe4qowWhX6FmRuXJ_uEk7hQ",
    authDomain: "calendas-clients.firebaseapp.com",
    projectId: "calendas-clients",
    storageBucket: "calendas-clients.appspot.com",
    messagingSenderId: "956803089154",
    appId: "1:956803089154:web:e05d1f7236f1957dd7781b"
};

// init firebase app
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()

export { projectFirestore }