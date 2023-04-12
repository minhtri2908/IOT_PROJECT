// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDR9OL1g5ryzf5sM3kY7HypZFWU7NYvSR0",
    authDomain: "iotproject-eb6db.firebaseapp.com",
    projectId: "iotproject-eb6db",
    storageBucket: "iotproject-eb6db.appspot.com",
    messagingSenderId: "350979817414",
    appId: "1:350979817414:web:06677cfa56d4acb4627cc7",
    measurementId: "G-W7KNQJLNG6"
  };

// Second firebaseConfig //

// const firebaseConfig = {
//     apiKey: "AIzaSyDR9OL1g5ryzf5sM3kY7HypZFWU7NYvSR0",
//     authDomain: "iotproject-eb6db.firebaseapp.com",
//     projectId: "iotproject-eb6db",
//     storageBucket: "iotproject-eb6db.appspot.com",
//     messagingSenderId: "350979817414",
//     appId: "1:350979817414:web:06677cfa56d4acb4627cc7",
//     measurementId: "G-W7KNQJLNG6"
//   };

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
// const analytics = getAnalytics(app);

export default firebase;
