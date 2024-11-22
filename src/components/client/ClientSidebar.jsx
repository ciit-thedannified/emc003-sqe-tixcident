import viteLogo from "../assets/react.svg";

export default function ClientSidebar() {
    return (
        /* Base */
        <div className={`bg-blue-900 text-white h-screen`}>

            {/* Logo Section */}
            <div className="flex items-center p-6">
                <img
                    src={viteLogo}
                    alt="Tixcident Logo"
                    className={`w-10 h-10 mr-2`}
                />
                <h1
                    className={`text-xl font-bold`}
                >
                    TIXCIDENT
                </h1>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col w-full">
                {["Dashboard", "Tickets", "Account Profile", "Button", "Submit Feedback"].map(
                    (item, index) => (
                        <li
                            key={index}
                            className="flex items-center pl-6 py-3 hover:bg-blue-800 cursor-pointer transition-colors"
                        >
                            <div className="w-4 h-4 bg-gray-300 rounded-full mr-4"></div>
                            <span>{item}</span>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}