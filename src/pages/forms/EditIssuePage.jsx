import React, { useState } from "react";
import AdminSearchComponent from "../../components/general/AdminSearchComponent.jsx";

export default function EditIssuePage() {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleStaffSelect = (staff) => {
    setSelectedStaff(staff);
    console.log("Selected Staff:", staff);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <div className="text-3xl text-center font-bold text-gray-900">
        Edit Issue Ticket
      </div>
      <div className="text-md text-center mt-5 text-gray-500">
       Please enter your complete details of the issue or report.
      </div>
      <form className="space-y-4">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
          />
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
          >
            <option value="">Select Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* Priority */}
        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            id="priority"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Staff */}
        <div>
          <label
            htmlFor="staff"
            className="block text-sm font-medium text-gray-700"
          >
            Staff
          </label>
          <AdminSearchComponent onSelect={handleStaffSelect} />
        </div>

        {selectedStaff && (
          <div className="mt-4 text-gray-700">
            <strong>Selected Staff:</strong> {selectedStaff.name}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
