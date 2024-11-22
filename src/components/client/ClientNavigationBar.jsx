export default function ClientNavigationBar() {
    return (
        <div className="bg-gray-100 h-16 flex justify-between items-center px-6 shadow-sm">
            {/* Left Section */}
            <div></div>
            {/* Placeholder for alignment purposes */}

            {/* Right Section */}
            <div className="flex items-center space-x-6">

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300"></div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium">username</span>
                    <img
                        src="your-logo-url.png"
                        alt="User Profile"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}