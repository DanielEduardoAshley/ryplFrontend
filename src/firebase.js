import * as firebase from "firebase";
import dotenv from "dotenv";

dotenv.config();

//Initialize firebase
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_API_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_API_DATABASEURL,
//   projectId: process.env.REACT_APP_FIREBASE_API_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_API_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBP5kaNZv120AoNdzhvBsHvSyxdhL3Q8NQ",
  authDomain: "rypl-acf62.firebaseapp.com",
  databaseURL: "https://rypl-acf62.firebaseio.com",
  projectId: "rypl-acf62",
  storageBucket: "rypl-acf62.appspot.com",
  messagingSenderId: "26800289101",
  appId: "1:26800289101:web:b084c890a4b2a462"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
