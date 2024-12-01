import { createRoot } from 'react-dom/client';
import './assets/css/index.css';
import {RouterProvider} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import {AxiosProvider} from "./contexts/AxiosContext.jsx";
import {Provider} from "./components/ui/provider.jsx";

createRoot(document.getElementById('root')).render(
    <Provider>
        <AuthProvider>
            <AxiosProvider>
                <RouterProvider router={AppRoutes} />
            </AxiosProvider>
        </AuthProvider>
    </Provider>
)