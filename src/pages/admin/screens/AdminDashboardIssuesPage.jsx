import AdminIssuesTable from "../../../components/admin/AdminIssuesTable.jsx";

export default function AdminDashboardIssuesPage() {
    return (
        <>
            <div className="w-full font-bold text-gray-600 text-4xl mb-5">
                Submitted Issues
            </div>
            <AdminIssuesTable/>
        </>
    )
}