import { createRoot } from 'react-dom/client';
import './assets/css/index.css';
import {RouterProvider} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import {AxiosProvider} from "./contexts/AxiosContext.jsx";

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <AxiosProvider>
            <RouterProvider router={AppRoutes} />
        </AxiosProvider>
    </AuthProvider>
)