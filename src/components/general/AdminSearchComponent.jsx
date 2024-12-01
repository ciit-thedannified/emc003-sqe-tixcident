import React, { useState } from "react";

const AdminSearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);


  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];

  const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Headphones" },
    { id: 3, name: "Smartphone" },
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
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(lowerQuery)
    );

    setResults([...filteredUsers, ...filteredItems]);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Search users or items..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="mt-4 space-y-2">
        {results.length > 0 ? (
          results.map((result) => (
            <li
              key={result.id}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900"
            >
              {result.name}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results found.</li>
        )}
      </ul>
    </div>
  );
};

export default AdminSearchComponent;