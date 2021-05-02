import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCL4qOvv56E3ToYkqz4iAZ7cbsepV2Au9M",
  authDomain: "chat-app-82e6b.firebaseapp.com",
  projectId: "chat-app-82e6b",
  storageBucket: "chat-app-82e6b.appspot.com",
  messagingSenderId: "754570454313",
  appId: "1:754570454313:web:5525e5162d0cc73c44c338",
  measurementId: "G-EXY9Q9YXRT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
