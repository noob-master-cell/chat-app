import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyAg2PloSM0Lj4UszNVbzMS57vWY5lE3ISA",
  authDomain: "chat-web-app-5baa0.firebaseapp.com",
  databaseURL: "https://chat-web-app-5baa0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-web-app-5baa0",
  storageBucket: "chat-web-app-5baa0.appspot.com",
  messagingSenderId: "305880056022",
  appId: "1:305880056022:web:7c23b6ca4fec720ce2c977"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
