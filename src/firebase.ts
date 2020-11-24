import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyUZDrPep07lRu-rkEYNBSvl00o-Bc7II",
  authDomain: "ts-app-764aa.firebaseapp.com",
  databaseURL: "https://ts-app-764aa.firebaseio.com",
  projectId: "ts-app-764aa",
  storageBucket: "ts-app-764aa.appspot.com",
  messagingSenderId: "550356821396",
  appId: "1:550356821396:web:2a3a1fbabdcce1c58e5b81"
};
// Initialize Firebase
export const databaseRef = firebase.initializeApp(firebaseConfig);
export default firebase;

