import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "./firebaseConfig";
import {getFirestore} from "firebase/firestore";


const FireBaseApp = firebase.initializeApp(
    firebaseConfig
);

export const FireStoreDB = getFirestore(FireBaseApp);
export const FireBaseAuth = FireBaseApp.auth();
export default FireBaseApp;