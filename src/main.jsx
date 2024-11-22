import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={AppRoutes}>
        <App />
    </RouterProvider>
)
