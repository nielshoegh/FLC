import firebase from 'firebase'
import 'firebase/firestore' 

// Firebase INIT goes here
var firebaseConfig = {
    apiKey: "AIzaSyCq3JY3Nhpl5SiPo7MWeXa6GhK2N4j5W-4",
    authDomain: "flc-danmark-brugeroprettelser.firebaseapp.com",
    databaseURL: "https://flc-danmark-brugeroprettelser.firebaseio.com",
    projectId: "flc-danmark-brugeroprettelser",
    storageBucket: "flc-danmark-brugeroprettelser.appspot.com",
    messagingSenderId: "422199158949",
    appId: "1:422199158949:web:b0beab8319ec4ae388854c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
 
  db.settings({ timestampsInSnapshots: true });

 export default db;