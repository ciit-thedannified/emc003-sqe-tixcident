export default function TicketCard({ label, count, color }) {
    return (
        <div className="flex w-full max-w-xs md:max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm">
            {/* Left Colored Line */}
            <div className={`w-1 bg-blue-500 rounded-l-lg`}></div>
            {/* Content */}
            <div className="flex flex-col justify-center pl-4">
                <p className="text-sm font-medium text-gray-500">{label}</p>
                <p className="mt-1 text-3xl font-bold text-gray-800">{count}</p>
            </div>
        </div>
    );
};
