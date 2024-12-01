import { Outlet } from "react-router-dom";
import AdminNavigationBar from "../../components/admin/AdminNavigationBar.jsx";
import DashboardSidebar from "../../components/general/DashboardSidebar.jsx";
import AdminSidebarMenu from "../../components/admin/AdminSidebarMenu.jsx";

export default function AdminDashboard() {
    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar */}

            <div className="w-64">
                <DashboardSidebar sidebarMenu={AdminSidebarMenu} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navigation Bar */}
                <div className="h-16">
                    <AdminNavigationBar />
                </div>

                {/* Content Area */}
                <div className="flex-1 p-4 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
