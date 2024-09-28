/*
 * ./DATA/CONSTANTS/firebase_constants.js
 *
 * 'firebase_constants' contains all string constants for the application's
 * Firebase SDK configuration, which are sensitive data of the project.
 *
 * This template serves as a standardized format of setting up these constants
 * to be used for any Firebase-related operations.
 *
 * It is strongly advised to ONLY create a copy of this file template, move to
 * another directory, preferably to its class folder, and enter correct value
 * to each constant to keep the application working.
 *
 * You may delete this multiline comment after modifying a copy of this template
 * file.
 */

const FIREBASE_API_KEY = "";
const FIREBASE_AUTH_DOMAIN = "";
const FIREBASE_PROJECT_ID = "";
const FIREBASE_STORAGE_BUCKET = "";
const FIREBASE_MESSAGING_SENDER_ID = "";
const FIREBASE_APP_ID = "";
const FIREBASE_MEASUREMENT_ID = "";

const FirebaseConfiguration = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
};

export default FirebaseConfiguration;