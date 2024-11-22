import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import ErrorBoundarySample from "../pages/errors/ErrorBoundarySample.jsx";

const AppRoutes = createBrowserRouter([
    {
        path: '*',
        errorElement: <ErrorBoundarySample />
    },
    {
        path: '/',
        element: (
            <App />
        )
    }
]);

export default AppRoutes;