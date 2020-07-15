import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBu_E0FAx26V_kGqTudU3E21IqvxmmHpKUz",
    authDomain: "amzclone-b650b.firebaseapp.com",
    databaseURL: "https://amzclone-b650b.firebaseio.com",
    projectId: "amzclone-b650bz",
    storageBucket: "amzclone-b650b.appspot.com",
    messagingSenderId: "86725303767z",
    appId: "1:86725303767:web:c9ccad43676e26ed9abf92z",
    measurementId: "G-2TT65X2MY1z"

});

// const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth };