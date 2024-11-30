import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

import {
    Authentication
} from "../configurations/firebase.config.js";

/**
 * Registers the new user and saves their account credentials to Firebase Authentication's database.
 * As of writing, the default registration process only requires
 *
 * @param email User's provided e-mail credential
 * @param password User's provided password credential
 * @returns {Promise<UserCredential>}
 */
const createAccount = async (email, password) => {
    return createUserWithEmailAndPassword(Authentication, email, password);
}

/**
 * Signs in an existing user using their valid account credentials.
 * @param email User's provided e-mail credential
 * @param password User's provided password credential
 * @returns {Promise<UserCredential>}
 */
const loginAccount = async (email, password) => {
    return signInWithEmailAndPassword(Authentication, email, password);
}

/**
 * Signs out the currently authenticated user from the system.
 * @returns {Promise<void>}
 */
const logOutAccount = async () => {
    return signOut(Authentication);
}

export {
    createAccount,
    loginAccount,
    logOutAccount,
}