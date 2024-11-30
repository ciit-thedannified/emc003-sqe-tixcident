import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    onAuthStateChanged,
} from "firebase/auth"

import {
    Authentication
} from "../configurations/firebase.config.js"

const AuthContext = createContext({});

function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(Authentication, user => {
            setCurrentUser(user);
            setAuthenticated(user != null);
        });
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