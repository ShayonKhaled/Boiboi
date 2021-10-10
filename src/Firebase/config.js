import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_DxRIZgwLixwaenAzC4WOz7kuJtgxHDg",
  authDomain: "boiboi-55a98.firebaseapp.com",
  databaseURL: "https://boiboi-55a98-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "boiboi-55a98",
  storageBucket: "boiboi-55a98.appspot.com",
  messagingSenderId: "798246680467",
  appId: "1:798246680467:web:45d98992a46fd14fe29a66",
  measurementId: "G-SDGJDGMC6L"
};

  //init firebase app 
  firebase.initializeApp(firebaseConfig)

  //init firestore
  const projectFirestore = firebase.firestore()

  export { projectFirestore }