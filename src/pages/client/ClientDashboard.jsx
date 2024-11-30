import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import AdminNavigationBar from "../../components/admin/AdminNavigationBar.jsx";
import TicketCard from "../../components/TicketCard.jsx";
import AdminMenuChart from "../../components/admin/AdminMenuChart.jsx";
import YourIssues from "../../components/YourIssues.jsx";
import AdminTable from "../../components/admin/AdminTable.jsx";
import { DocumentIcon, ClockIcon, CheckCircleIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";


export default function ClientDashboard() {
    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar */}

            <div className="w-64">
                <AdminSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navigation Bar */}
                <div className="h-16">
                    <AdminNavigationBar />
                </div>

                <h1 className="text-2xl font-bold text-gray-500 pl-10 mt-5">DASHBOARD</h1>

                {/* Content Area */}
                <div className="flex-1 bg-gray-50 p-6 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
