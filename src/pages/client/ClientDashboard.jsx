import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/general/DashboardSidebar.jsx";
import ClientSidebarMenu from "../../components/client/ClientSidebarMenu.jsx";
import {Toaster} from "../../components/ui/toaster.jsx";
import DashboardNavigationBar from "../../components/general/DashboardNavigationBar.jsx";

export default function ClientDashboard() {
    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar */}
            <Toaster />

            <div className="w-64">
                <DashboardSidebar sidebarMenu={ClientSidebarMenu}/>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navigation Bar */}
                <div className="h-16">
                    <DashboardNavigationBar />
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-gray-50 p-6 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
