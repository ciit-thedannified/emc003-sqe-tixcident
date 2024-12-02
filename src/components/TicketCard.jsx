export default function TicketCard({ label, count, color, icon }) {
    const colorClasses = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500",
    };

    return (
        <div className="flex w-full max-w-xs md:max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm">
            {/* Left Colored Line */}
            <div className={`w-1 ${colorClasses[color] || "bg-blue-500"} rounded-l-lg`}></div>
            
            {/* Content */}
            <div className="flex items-center justify-between w-full p-4">
                {/* Text Content */}
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-500">{label}</p>
                    <p className="mt-1 text-3xl font-bold text-gray-800">{count}</p>
                </div>
                {/* Icon */}
                <div className="flex items-center mt-5">
                    {icon}
                </div>
            </div>
        </div>
    );
}
