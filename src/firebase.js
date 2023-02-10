import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    // Add your config here
    apiKey: "AIzaSyA_Lhi-YKcCOHI477NNj3CdMFNvW2TOOMk",
    authDomain: "voip-ffc25.firebaseapp.com",
    projectId: "voip-ffc25",
    storageBucket: "voip-ffc25.appspot.com",
    messagingSenderId: "576118621127",
    appId: "1:576118621127:web:3b18957f30020d2e740fe2"
};

firebase.initializeApp(firebaseConfig);

// used for the firestore refs
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

