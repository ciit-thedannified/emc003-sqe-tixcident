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
import AxiosConsumer from "./AxiosContext.jsx";

const AuthContext = createContext({});

function useAuth() {
    const axiosInstance = AxiosConsumer();
    const [authenticated, setAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null);
    const [credentials, setCredentials] = useState({});

    useEffect(() => {
        let authStateChanged;
        let idTokenChanged;

        async function handleStateChanges() {
            idTokenChanged = onIdTokenChanged(Authentication, async user => {
                if (!user) {
                    return localStorage.removeItem('authToken');
                }

                localStorage.setItem('authToken', await user.getIdToken());
            });

            authStateChanged = onAuthStateChanged(Authentication, async user => {
                setCurrentUser(user);
                setAuthenticated(user != null);

                if (user) {
                    localStorage.setItem("userId", user.uid);
                    localStorage.setItem('authToken', await user.getIdToken());

                    await axiosInstance.get(`/users/${localStorage.userId}`, {})
                        .then(response => {
                            if (response.status === 200) {
                                setCredentials(response.data);
                            }
                        })
                        .catch(e => null);
                }
                else {
                    setCredentials({});
                    return localStorage.removeItem("userId");
                }
            });
        }

        handleStateChanges();

        return () => {
            authStateChanged.unsubscribe();
            idTokenChanged.unsubscribe();
        }
    }, []);

    return {authenticated, currentUser, credentials}
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