import AuthConsumer from "../../contexts/AuthContext.jsx";
import {Navigate, useLocation} from "react-router-dom";
import {UserTypes} from "../../data/enums.js";

export default function AuthenticatedRoute({children}) {
    const { authenticated, credentials } = AuthConsumer();
    const location = useLocation();

    if (!authenticated) {
        return <Navigate to={'/login'} replace state={{ path: location.pathname }} />
    }
    else {
        if (location.pathname.startsWith("/u") || location.pathname.startsWith("/a")) return children;
    }
}