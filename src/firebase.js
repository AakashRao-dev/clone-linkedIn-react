import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAR5QFt6F61RKxfyYxa17dfNZO_-D4Yolg',
  authDomain: 'linkedin-clone-a2769.firebaseapp.com',
  projectId: 'linkedin-clone-a2769',
  storageBucket: 'linkedin-clone-a2769.appspot.com',
  messagingSenderId: '574823529315',
  appId: '1:574823529315:web:564193527c58e986517156',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
