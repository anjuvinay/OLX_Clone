import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUbi8VCsTwtXJZAwRo8k3I7loZY77mCJg",
    authDomain: "olx-clone-cdf1b.firebaseapp.com",
    projectId: "olx-clone-cdf1b",
    storageBucket: "olx-clone-cdf1b.appspot.com",
    messagingSenderId: "675589970034",
    appId: "1:675589970034:web:293aea1190dbde82e88aeb",
    measurementId: "G-Q0DF4WCX3Q"
  };

 export default firebase.initializeApp(firebaseConfig)