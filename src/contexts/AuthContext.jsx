import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    onAuthStateChanged,
    onIdTokenChanged
} from "firebase/auth"

import {
    Authentication
} from "../configurations/firebase.config.js"

const AuthContext = createContext({});

function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let authStateChanged;
        let idTokenChanged;

        async function handleStateChanges() {
            authStateChanged = onAuthStateChanged(Authentication, async user => {
                setCurrentUser(user);
                setAuthenticated(user != null);

                if (user) {
                    return localStorage.setItem("userId", user.uid);
                }
                else {
                    return localStorage.removeItem("userId");
                }
            });

            idTokenChanged = onIdTokenChanged(Authentication, async user => {
                if (!user) {
                    return localStorage.removeItem('authToken');
                }

                localStorage.setItem('authToken', await user.getIdToken());
            });
        }

        handleStateChanges();

        return () => {
            authStateChanged.unsubscribe();
            idTokenChanged.unsubscribe();
        }
    }, []);

    return {authenticated, currentUser}
}

export function AuthProvider({children}) {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export default function AuthConsumer() {
    return useContext(AuthContext);
}