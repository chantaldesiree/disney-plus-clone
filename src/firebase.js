  import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDoiH5AZppb82Z6lPOYsFl_iqqKaixi8-c",
    authDomain: "disney-plus-clone-3cdf0.firebaseapp.com",
    projectId: "disney-plus-clone-3cdf0",
    storageBucket: "disney-plus-clone-3cdf0.appspot.com",
    messagingSenderId: "12082699546",
    appId: "1:12082699546:web:49293c6b417a1e33b620a3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;