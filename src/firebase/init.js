import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = { 
    // Add your config here
    apiKey: "AIzaSyA_Lhi-YKcCOHI477NNj3CdMFNvW2TOOMk",
    authDomain: "voip-ffc25.firebaseapp.com",
    projectId: "voip-ffc25",
    storageBucket: "voip-ffc25.appspot.com",
    messagingSenderId: "576118621127",
    appId: "1:576118621127:web:3b18957f30020d2e740fe2"
};

// init firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;
