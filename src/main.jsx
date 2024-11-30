import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import {AuthProvider} from "./contexts/AuthContext.js";
import {AxiosProvider} from "./contexts/AxiosContext.js";

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <AxiosProvider>
            <RouterProvider router={AppRoutes}>
                <App />
            </RouterProvider>
        </AxiosProvider>
    </AuthProvider>
)
