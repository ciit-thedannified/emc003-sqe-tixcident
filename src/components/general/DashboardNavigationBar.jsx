import {PlusIcon, QuestionMarkCircleIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import { Button } from "../ui/button.jsx";
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog.jsx"
import {logOutAccount} from "../../services/authServices.js";
import {useNavigate} from "react-router-dom";
import AuthConsumer from '../../contexts/AuthContext.jsx'
import {useEffect, useState} from "react";

export default function DashboardNavigationBar() {
    const { credentials } = AuthConsumer();
    const navigate = useNavigate();

    const [username, setUsername] = useState("username");

    async function handleUserLogout() {
        await logOutAccount()
            .then(() => {
                navigate("/login");
            });
    }

    async function handleCreateIssue() {
        navigate("./issues/create");
    }

    useEffect(() => {
        setUsername(credentials?.username ?? username);
    }, [credentials]);

    return (
        <div className="bg-gray-100 h-16 flex justify-between items-center px-6 shadow-sm">
            {/* Left Section */}
            <div></div>
            {/* Placeholder for alignment purposes */}

            {/* Right Section */}
            <div className="flex items-center justify-start space-x-6">

                <div className="flex items-center space-x-3 text-black">
                    <Button className="hover:bg-gray-300 p-3">
                        <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true"/>
                        Help
                    </Button>
                </div>

                <div className="flex items-center space-x-3">
                    <Button className="bg-blue-500 px-6 py-2 rounded-md shadow-sm text-white hover:bg-blue-700"
                        onClick={handleCreateIssue}>
                        <PlusIcon className="h-6 w-6" aria-hidden="true" />
                        Create Issue
                    </Button>
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300"></div>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                    <UserCircleIcon className="w-8 h-8 text-black"/>
                    <span className="text-gray-700 font-medium">{username}</span>
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300"></div>

                {/* Log out button */}
                <div className="flex items-center space-x-3">
                    <DialogRoot>
                        <DialogTrigger asChild>
                            <Button className="hover:underline" size="sm">
                                Log out
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-3xl font-medium text-gray-700">
                                    Log out?
                                </DialogTitle>
                            </DialogHeader>
                            <DialogBody>
                                <p>
                                    Are you sure you want to log out
                                </p>
                            </DialogBody>
                            <DialogFooter>
                                <DialogActionTrigger asChild>
                                    <Button className="bg-red-500 p-3 text-white"
                                            onClick={handleUserLogout}>
                                        Log Out
                                    </Button>
                                </DialogActionTrigger>
                                <DialogActionTrigger asChild>
                                    <Button className="border p-3">
                                        Cancel
                                    </Button>
                                </DialogActionTrigger>
                            </DialogFooter>
                            <DialogCloseTrigger/>
                        </DialogContent>
                    </DialogRoot>
                </div>
            </div>
        </div>
    );
}