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

// Firestore
const db = firebase.firestore();
const employeesCollection = db.collection('employees');
const servicesCollection = db.collection('services');
const clientsCollection = db.collection('clients');

// Authorization
const auth = firebase.auth();
const currentUser = auth.currentUser;

export {
  db,
  employeesCollection,
  servicesCollection,
  clientsCollection,
  auth,
  currentUser
};
