import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_BlSdeRWrEXRHK1HMWo_1opQOXsHypew",
    authDomain: "ecommerce-db-bb771.firebaseapp.com",
    databaseURL: "https://ecommerce-db-bb771.firebaseio.com",
    projectId: "ecommerce-db-bb771",
    storageBucket: "ecommerce-db-bb771.appspot.com",
    messagingSenderId: "47258319198",
    appId: "1:47258319198:web:215bb8cabb3baac7db37cf",
    measurementId: "G-P8SP2TZJNW"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        } catch (error) {
            console.log('Error creating user ', error.message);
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;