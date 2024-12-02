import AuthConsumer from "../../contexts/AuthContext.jsx";
import {Navigate, useLocation} from "react-router-dom";
import {UserTypes} from "../../data/enums.js";

export default function AuthlessRoute({children}) {
    const {credentials, authenticated} = AuthConsumer();
    const location = useLocation();

    if (!authenticated) return children;

    else {
        if (credentials.type === UserTypes.User.value) {
            return <Navigate to={'/u'} replace state={{path: location.pathname}}/>
        } else if (credentials.type === UserTypes.Admin.value) {
            return <Navigate to={'/a'} replace state={{path: location.pathname}}/>
        }

        return children;
    }
}