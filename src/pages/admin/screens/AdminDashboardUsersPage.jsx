import AdminUsersTable from "../../../components/admin/AdminUsersTable.jsx";

export default function AdminDashboardUsersPage() {
    return (
        <>
            <div className="w-full font-bold text-gray-600 text-4xl mb-5">
                Users
            </div>
            <AdminUsersTable />
        </>
    )
}