import React, { useState } from "react";

const AdminSearchComponent = ({ onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query) {
      setResults([]); 
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(lowerQuery)
    );

    setResults(filteredUsers); 
  };

  const handleSelect = (user) => {
    onSelect(user); 
    setSearchQuery(""); 
    setResults([]); 
  };

  return (
    <div className="max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search staff..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900 caret-gray-700"
      />
      <ul className="mt-4 space-y-2">
        {results.length > 0 ? (
          results.map((user) => (
            <li
              key={user.id}
              onClick={() => handleSelect(user)}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 cursor-pointer hover:bg-gray-200"
            >
              {user.name}
            </li>
          ))
        ) : (
          searchQuery && <li className="text-gray-500">No results found.</li>
        )}
      </ul>
    </div>
  );
};

export default AdminSearchComponent;
