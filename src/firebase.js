import * as firebase from "firebase";
import dotenv from "dotenv";

dotenv.config();

//Initialize firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_API_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_API_APPID
};

firebase.initializeApp(firebaseConfig);

export default firebase;
