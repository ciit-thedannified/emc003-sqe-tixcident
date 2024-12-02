import AdminFeedbackTable from "../../../components/admin/AdminFeedbackTable.jsx";

export default function AdminDashboardFeedbacksPage() {
    return (
        <>
            <div className="w-full font-bold text-gray-600 text-4xl mb-5">
                Submitted Feedbacks
            </div>
            <AdminFeedbackTable/>
        </>
    )
}