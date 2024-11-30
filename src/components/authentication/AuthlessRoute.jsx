import AuthConsumer from "../../contexts/AuthContext.jsx";
import {Navigate, useLocation} from "react-router-dom";

export default function AuthlessRoute({children}) {
    const { authenticated } = AuthConsumer();
    const location = useLocation();

    return !authenticated
        ? children
        : <Navigate to={'/dashboard'} replace state={{ path: location.pathname }} />
}