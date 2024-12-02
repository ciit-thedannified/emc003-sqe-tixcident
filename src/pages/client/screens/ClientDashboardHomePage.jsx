import TicketCard from "../../../components/TicketCard.jsx";
import {CheckCircleIcon, ClipboardDocumentListIcon, ClockIcon, DocumentIcon} from "@heroicons/react/24/solid/index.js";
import TicketOverview from "../../../components/TicketOverview.jsx";
import ActiveTicketsPriority from "../../../components/ActiveTicketsPriority.jsx";

export default function ClientDashboardHomePage() {

    return (
        <>
            <div className="w-full font-bold text-gray-600 text-4xl mb-5">
                Dashboard
            </div>

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

            </div>

            {/* Your Issues Section */}
            <div className="flex flex-wrap gap-6">
                <div className="flex justify-end gap-8 p-8 mt-6 bg-white rounded-lg shadow-md w-full">
                    {/* Line Chart */}
                    <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-cyan-500 mb-6">
                            Tickets Overview
                        </h2>
                        <TicketOverview/>
                    </div>

                    {/* Donut Chart */}
                    <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center">
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold text-cyan-500 mb-6 text-center">
                                Active Tickets Priority
                            </h2>
                            <ActiveTicketsPriority/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}