import AuthConsumer from "../../contexts/AuthContext.jsx";
import {Navigate, useLocation} from "react-router-dom";

export default function ClientProtectedRoute({children}) {
    const { authenticated } = AuthConsumer();
    const location = useLocation();

    return authenticated
        ? children
        : <Navigate to={'/'} replace state={{ path: location.pathname }} />
}