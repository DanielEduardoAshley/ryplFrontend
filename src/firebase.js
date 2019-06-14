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
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_API_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_API_DATABASEURL,
  // projectId: process.env.REACT_APP_FIREBASE_API_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_FIREBASE_API_APPID
  apiKey: "AIzaSyBP5kaNZv120AoNdzhvBsHvSyxdhL3Q8NQ",
  authDomain: "rypl-acf62.firebaseapp.com",
  databaseURL: "https://rypl-acf62.firebaseio.com",
  projectId: "rypl-acf62",
  storageBucket: "rypl-acf62.appspot.com",
  messagingSenderId: "26800289101",
  appId: "1:26800289101:web:b084c890a4b2a462"
};

const secondConfig = {
  apiKey: "AIzaSyDgeooUYYWWpGSpmFnfawvxAhRb44szp4s",
  authDomain: "socket-2f8bc.firebaseapp.com",
  databaseURL: "https://socket-2f8bc.firebaseio.com",
  projectId: "socket-2f8bc",
  storageBucket: "socket-2f8bc.appspot.com",
  messagingSenderId: "889821124816",
  appId: "1:889821124816:web:00ef08bceb5fbb0e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("config is...", firebaseConfig);

export const dataBaseFirebase = firebase.initializeApp(secondConfig, 'other')
export default firebase;
