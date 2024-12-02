import {useEffect, useState} from "react";
import AxiosConsumer from "../../contexts/AxiosContext.jsx";
import {toaster} from "../ui/toaster.jsx";
import {UserTypes} from "../../data/enums.js";

const AdminSearchComponent = ({onSelect}) => {
    const axiosInstance = AxiosConsumer();
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);


    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            axiosInstance.get(`/users/all`, {
                params: {
                    type: UserTypes.Admin.value,
                    page: 1,
                    items: 1000,
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        setUsers([{username: "None"}, ...response.data]);
                        console.log(users);
                        resolve("Admins fetched successfully.");
                    }
                    reject("Something went wrong with deleting the user.");
                })
                .catch(error => {
                    reject(error);
                })
        });

    }, [axiosInstance]);


    const handleSearch = (query) => {
        setSearchQuery(query);

        if (!query) {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filteredUsers = users.filter((user) => {
            let username = user.username.toLowerCase();
            return username.startsWith(lowerQuery);
        });

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
                            {user.username}
                        </li>
                    ))
                ) : (
                    searchQuery && <li className="text-gray-500">No staff found.</li>
                )}
            </ul>
        </div>
    );
};

export default AdminSearchComponent;
