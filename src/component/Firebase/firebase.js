import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore' ;

// Configuration de FireBase
const config = {
    apiKey: "AIzaSyCzElMibKSJzZUg6mPcOSNWSCwueDJ7TnA",
    authDomain: "animals-14c76.firebaseapp.com",
    projectId: "animals-14c76",
    storageBucket: "animals-14c76.appspot.com",
    messagingSenderId: "646039280501",
    appId: "1:646039280501:web:53c2af81d3b7df0786913c"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // Inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // Deconnexion
    signoutUser = () => this.auth.signOut();

    // Cloud Firestore 
    user  =  uid =>  this.db.doc(`users/${uid}`);
}

export default Firebase;