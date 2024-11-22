
import {Outlet} from "react-router-dom";
import ClientSidebar from "../../components/client/ClientSidebar.jsx";
import ClientNavigationBar from "../../components/client/ClientNavigationBar.jsx";
import TicketCard from "../../components/TicketCard.jsx";

export default function ClientDashboard() {
    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar */}
            <div className="w-64">
                <ClientSidebar/>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navigation Bar */}
                <div className="h-16">
                    <ClientNavigationBar/>
                </div>

                {/* Content Area (Fills Remaining Space) */}
                <div className="flex-1 bg-gray-50 p-6 overflow-auto">
                    <div className="flex flex-wrap gap-2 justify-items-start items-baseline p-4 bg-gray-50">
                        <TicketCard label="TOTAL TICKETS" count={60} color="blue" />
                        <TicketCard label="PENDING TICKETS" count={24} color="red" />
                        <TicketCard label="RESOLVED TICKETS" count={36} color="green" />
                        <TicketCard label="ESCALATED TICKETS" count={12} color="yellow" />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
