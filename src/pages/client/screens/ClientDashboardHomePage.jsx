import TicketCard from "../../../components/TicketCard.jsx";
import {CheckCircleIcon, ClipboardDocumentListIcon, ClockIcon, DocumentIcon} from "@heroicons/react/24/solid/index.js";
import AdminMenuChart from "../../../components/admin/AdminMenuChart.jsx";
import YourIssues from "../../../components/YourIssues.jsx";

export default function ClientDashboardHomePage() {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <TicketCard label="TOTAL TICKETS" count={60} color="blue"
                            icon={<DocumentIcon className="w-8 h-8 text-gray-400"/>}/>
                <TicketCard label="PENDING TICKETS" count={24} color="red"
                            icon={<ClockIcon className="w-8 h-8 text-gray-400"/>}/>
                <TicketCard label="RESOLVED TICKETS" count={36} color="green"
                            icon={<CheckCircleIcon className="w-8 h-8 text-gray-400"/>}/>
                <TicketCard label="IN PROGRESS TICKETS" count={12} color="yellow"
                            icon={<ClipboardDocumentListIcon className="w-8 h-8 text-gray-400"/>}/>
            </div>

            {/* Charts Section */}
            <div className="flex flex-wrap gap-6">
                <AdminMenuChart/>
            </div>

            {/* Your Issues Section */}
            <div className="flex flex-wrap gap-6">
                <YourIssues/>
            </div>

        </>
    )
}