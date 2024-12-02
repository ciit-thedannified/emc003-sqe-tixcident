import React from "react";

const IssueCard = ({ title, author, time }) => {
  return (
    <div className="flex items-center justify-between border border-blue-300 rounded-lg p-4 shadow-sm bg-white">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500">
          by {author} • {time}
        </p>
      </div>
      <div className="w-8 h-8 border border-blue-300 rounded-md flex items-center justify-center">
        {/* Placeholder for an icon or button */}
        <svg
          className="w-4 h-4 text-black-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          //xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default IssueCard;
