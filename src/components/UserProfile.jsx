import {UserCircleIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";
import AuthConsumer from "../contexts/AuthContext.jsx";
import {DateTime} from "luxon";
import {toaster} from "./ui/toaster.jsx";
import AxiosConsumer from "../contexts/AxiosContext.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {
    DISPLAY_NAME_MAX_LENGTH,
    DISPLAY_NAME_MIN_LENGTH,
} from "../data/constants.js";

const formSchema = z.object({
    id: z.string(),

    displayName: z.string()
        .min(DISPLAY_NAME_MIN_LENGTH)
        .max(DISPLAY_NAME_MAX_LENGTH),
});

export default function UserProfile() {
    const {credentials} = AuthConsumer();
    const axiosInstance = AxiosConsumer();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [memberDate, setMemberDate] = useState("");
    const [accountType, setAccountType] = useState("");
    const [userId, setUserId] = useState("");

    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        setUserId(credentials.id);
        setUsername(credentials.username);
        setEmail(credentials.email);
        setDisplayName(credentials.displayName);
        setMemberDate(DateTime.fromISO(credentials.createdAt).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS));
        setAccountType(credentials.type);
    }, [credentials]);

    const onSubmit = (data) => {

        const promise = new Promise((resolve, reject) => {
            axiosInstance.patch(`/users/${data.id}`, {
                displayName: data.displayName
            })
                .then(response => {
                    if (response.status === 201) {
                        resolve("Feedback submitted successfully.");
                    }
                    reject("Something went wrong with submitting the feedback.");
                })
                .catch(error => {
                    reject(error);
                })
        });

        toaster.promise(promise, {
            success: {
                title: "Display name edited.",
                description: "Your new display name will appear shortly.",
            },
            error: {
                title: "Something went wrong.",
                description: "Please try submitting another feedback later."
            },
            loading: {
                title: "Submitting...",
                description: "Please wait while we change your display name."
            }
        });
    }

    return (
        <div className="flex flex-col lg:flex-row bg-gray-50 p-6 rounded-lg shadow-md w-full">
            {/* Left Section: Profile Picture */}
            <div
                className="w-full lg:w-1/3 flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
                <div className="relative">
                    <UserCircleIcon className="w-80 h-80 text-black"/>
                </div>
            </div>

            {/* Right Section: User Settings */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6 p-6">
                {/* User Settings */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-600 mb-4">User Settings</h2>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    disabled={true}
                                    value={username}
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
                                    disabled={true}
                                    value={email}
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
                                placeholder={displayName ?? "Enter your display name."}
                                className={
                                    errors.displayName ?
                                        "bg-gray-100 border border-red-500 rounded py-1 px-3 block focus:ring-red-500 focus:border-red-500 text-gray-700 w-full"
                                        :
                                        "bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                }
                                {...register("displayName")}
                            />
                            {
                                errors.displayName && <span className="text-red-600">{errors.displayName.message}</span>
                            }
                        </div>
                        <input type="hidden" value={credentials.id} {...register("id")}/>
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
                            <span className="font-semibold">Member Since:</span> {memberDate}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">User ID:</span> {userId}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Account Type:</span> {accountType}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
