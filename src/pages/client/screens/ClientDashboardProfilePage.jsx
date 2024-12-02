import UserProfile from "../../../components/UserProfile.jsx";

export default function ClientDashboardProfilePage() {
    return (
        <div>
            <div className="w-full font-bold text-gray-600 text-4xl mb-5">
                Profile
            </div>
            <UserProfile/>
        </div>
    )
}