import app from 'firebase/app';
import 'firebase/auth';

//Initialize firebase
const firebaseConfig = {
        apiKey: "AIzaSyBP5kaNZv120AoNdzhvBsHvSyxdhL3Q8NQ",
        authDomain: "rypl-acf62.firebaseapp.com",
        databaseURL: "https://rypl-acf62.firebaseio.com",
        projectId: "rypl-acf62",
        storageBucket: "rypl-acf62.appspot.com",
        messagingSenderId: "26800289101",
        appId: "1:26800289101:web:b084c890a4b2a462"
      };

      app.initializeApp(firebaseConfig);

      export default app;




