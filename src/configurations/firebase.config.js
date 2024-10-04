import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import FirebaseConfiguration from "../data/constants/firebase_constants.js";

// Initialize Firebase
const app = initializeApp(FirebaseConfiguration);

const Database = getFirestore(app);
const Authentication = getAuth(app);
const Storage = getStorage(app);


export {app, Database, Authentication, Storage};