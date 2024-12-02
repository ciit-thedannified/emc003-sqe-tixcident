import {createRoot} from 'react-dom/client';
import './assets/css/index.css';
import {RouterProvider} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import {AxiosProvider} from "./contexts/AxiosContext.jsx";
import {Provider} from "./components/ui/provider.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <Provider>
            <AxiosProvider>
                <AuthProvider>
                    <RouterProvider router={AppRoutes}/>
                </AuthProvider>
            </AxiosProvider>
        </Provider>
    </QueryClientProvider>
)