import { Outlet } from "react-router-dom";
import ClientSidebar from "../../components/client/ClientSidebar.jsx";
import ClientNavigationBar from "../../components/client/ClientNavigationBar.jsx";
import TicketCard from "../../components/TicketCard.jsx";
import ClientMenuChart from "../../components/client/ClientMenuChart.jsx";
import YourIssues from "../../components/YourIssues.jsx";
import { DocumentIcon, ClockIcon, CheckCircleIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";

export default function ClientDashboard() {
    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar */}
            <div className="w-64">
                <ClientSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navigation Bar */}
                <div className="h-16">
                    <ClientNavigationBar />
                </div>

                <h1 className="text-2xl font-bold text-gray-500 pl-10 mt-5">DASHBOARD</h1>

                {/* Content Area */}
                <div className="flex-1 bg-gray-50 p-6 overflow-auto">
                    <div className="grid grid-cols-4 gap-4">
                        <TicketCard label="TOTAL TICKETS" count={60} color="blue" icon={<DocumentIcon className="w-8 h-8 text-gray-400" />} />
                        <TicketCard label="PENDING TICKETS" count={24} color="red" icon={<ClockIcon className="w-8 h-8 text-gray-400" />} />
                        <TicketCard label="RESOLVED TICKETS" count={36} color="green" icon={<CheckCircleIcon className="w-8 h-8 text-gray-400" />}/>
                        <TicketCard label="IN PROGRESS TICKETS" count={12} color="yellow" icon={<ClipboardDocumentListIcon className="w-8 h-8 text-gray-400" />}/>
                    </div>

                    {/* Charts Section */}
                    <div className="flex flex-wrap gap-6">
                        <ClientMenuChart/>
                    </div>

                    {/* Your Issues Section */}
                    <div className="flex flex-wrap gap-6">
                        <YourIssues/>
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    );
}
