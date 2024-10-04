import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";

const AppRoutes = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <App />
            )
        },
    ]
);

export default AppRoutes;