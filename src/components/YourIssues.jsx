import React from "react";
import IssueCard from "./IssueCard";


export default function YourIssues() {
  const issues = [
    { id: 1, title: "Issue #1", author: "thedannified", time: "10:30 AM" },
    { id: 2, title: "Issue #2", author: "kojiescolar", time: "9:30 AM" },
    { id: 3, title: "Issue #3", author: "carlopastor", time: "8:30 AM" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mt-6">
      <h2 className="text-2xl font-bold text-gray-500 mb-4">Assigned Issues</h2>
      <div className="flex flex-col gap-4">
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            title={issue.title}
            author={issue.author}
            time={issue.time}
          />
        ))}
      </div>
    </div>
  );
}
