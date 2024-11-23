import React from "react";

export default function UserProfile() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 p-6 rounded-lg shadow-md w-full">
      {/* Left Section: Profile Picture */}
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
        <div className="relative">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500"
          />
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-lg hover:bg-yellow-600 mt-4">
            Change Photo
          </button>
        </div>
      </div>

      {/* Right Section: User Settings */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6 p-6">
        {/* User Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-600 mb-4">User Settings</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="user.name"
                  className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Display Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save Settings
            </button>
          </form>
        </div>

        {/* Membership Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-600 mb-4">
            Membership Details
          </h2>
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Member Since:</span> January 1,
              1970
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Account Type:</span> ADMIN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
