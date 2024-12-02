import ClientIssueTable from "../../../components/client/ClientIssueTable.jsx";

export default function ClientDashboardTicketsPage() {
    return (
        <div>
            <div className="w-full font-bold text-gray-600 text-4xl mb-5">
                Your Issues
            </div>
            <ClientIssueTable/>
        </div>
    );
}