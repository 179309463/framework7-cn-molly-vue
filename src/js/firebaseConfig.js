import firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATA_BASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID
} from './const/firebase.js';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATA_BASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const usersCollectionRef = db.collection('users');
const auth = firebase.auth();
const currentUser = auth.currentUser;

export { db, usersCollectionRef, auth, currentUser };
