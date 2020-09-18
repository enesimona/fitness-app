import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDfA-XX8WDDGZWCjbTZ3PljvdeCjnKtxR8",
  authDomain: "fitness-dc82e.firebaseapp.com",
  databaseURL: "https://fitness-dc82e.firebaseio.com",
  projectId: "fitness-dc82e",
  storageBucket: "fitness-dc82e.appspot.com",
  messagingSenderId: "347012331780",
  appId: "1:347012331780:web:4ed329904918b022c83851",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
