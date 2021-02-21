import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBiylmJYVwK6iasZkYF78xACCuu6R7INYU",
  authDomain: "wireless-library-577a1.firebaseapp.com",
  projectId: "wireless-library-577a1",
  storageBucket: "wireless-library-577a1.appspot.com",
  messagingSenderId: "817175346146",
  appId: "1:817175346146:web:129975c66d994785f817bb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
