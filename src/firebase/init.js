import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "good-grinds.firebaseapp.com",
    databaseURL: "https://good-grinds.firebaseio.com",
    projectId: "good-grinds",
    storageBucket: "good-grinds.appspot.com",
    messagingSenderId: "379563350896"
  };

// Then we're going to initialize firestore (our database) function on this firebaseApp 
const firebaseApp = firebase.initializeApp(config);
// remove the red error in browser console (above v.4.1.3)
//firebaseApp.firestore().settings({ timestampsInSnapshots: true})


// export firestore database
export default firebaseApp.firestore()
// Get a reference to the storage service, which is used to create references in your storage bucket
export var storage = firebaseApp.storage() 
// then we can go into another file such as a component and start to interact with the data by using import 