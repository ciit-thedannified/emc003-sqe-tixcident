import StarRating from "../../../components/general/StarRating.jsx";
import {useEffect, useState} from "react";
import AxiosConsumer from "../../../contexts/AxiosContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {DateTime} from "luxon";
import {FeedbackTypes} from "../../../data/enums.js";
import {Button} from "../../../components/ui/button.jsx";
import {ChevronLeftIcon} from "@heroicons/react/24/solid/index.js";
import {AiFillDelete} from "react-icons/ai";
import {
    DialogActionTrigger,
    DialogBody, DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader, DialogRoot,
    DialogTitle,
    DialogTrigger
} from "../../../components/ui/dialog.jsx";
import {toaster} from "../../../components/ui/toaster.jsx";

export default function AdminDashboardViewFeedbackPage() {
    const {feedback_id} = useParams();
    const axiosInstance = AxiosConsumer();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [type, setType] = useState("");
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchData() {
            axiosInstance.get(`/feedbacks/${feedback_id}`)
                .then(response => {
                    const {
                        author,
                        title,
                        type,
                        message,
                        rating,
                        createdAt
                    } = response.data;

                    setAuthor(author.username);
                    setCreatedAt(DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS));
                    setTitle(title);
                    setType(Object.values(FeedbackTypes).find(_type => _type.value === type).label);
                    setRating(rating)
                    setMessage(message);
                })
                .catch(error => console.error(error));
        }

        fetchData();
    });

    async function handleReturnToFeedbacks() {
        navigate('../feedbacks');
    }

    async function handleDeleteFeedback() {
        const promise = new Promise((resolve, reject) => {
            axiosInstance.delete(`/feedbacks/${feedback_id}`)
                .then(response => {
                    if (response.status === 204) {
                        resolve("Issue deleted successfully.");

                        navigate(`../feedbacks/`);
                    }

                    reject("Something went wrong with submitting the issue.");
                })
                .catch(error => {
                    reject(error);
                })
        });

        toaster.promise(promise, {
            success: {
                title: "Issue deleted successfully!",
                description: "Redirecting to feedbacks table..."
            },
            error: {
                title: "Something went wrong.",
                description: "Please try deleting this feedback later."
            },
            loading: {
                title: "Deleting feedback...",
                description: "Please wait while we delete this feedback."
            }
        });
    }

    return (
        <div className="w-full max-w-4xl mx-auto items-center">
            <div className="w-full">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                        <Button className="px-3 py-2 rounded-md shadow-sm text-blue-500 border hover:underline"
                                onClick={handleReturnToFeedbacks}>
                            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true"/>
                            Go back to Feedbacks
                        </Button>
                    </div>
                    <div className="flex items-center space-x-3">
                        <DialogRoot>
                            <DialogTrigger asChild>
                                <Button className="bg-red-500 px-3 py-2 rounded-md shadow-sm text-white border hover:underline">
                                    <AiFillDelete className="h-6 w-6" aria-hidden="true"/>
                                    Delete Feedback
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-3xl font-medium text-gray-700">
                                        Delete Feedback?
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogBody>
                                    <p>
                                        Are you sure you want to delete this feedback? This action cannot be undone.
                                    </p>
                                </DialogBody>
                                <DialogFooter>
                                    <DialogActionTrigger asChild>
                                        <Button className="bg-red-500 p-3 text-white"
                                                onClick={handleDeleteFeedback}>
                                            Delete
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

                <div className="w-full h-px bg-gray-300 mt-4 mb-4"></div>
            </div>
            <div className="w-full max-w bg-white rounded border border-gray-200 p-8">

                <div className="text-3xl text-center font-bold">
                    Feedback Submission
                </div>
                <div className="text-md text-center mt-5 text-gray-500">
                    Submitted by {author} on {createdAt}
                </div>
                <div className="p-4 gap-4">
                    <div className="mt-8 space-y-3">
                        <label htmlFor="title"
                               className="text-md text-gray-700 block mb-1 font-medium">
                            Title
                        </label>
                        <input
                            type="text" id="title" placeholder="Subject" disabled value={title}
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        />
                    </div>
                    <div className="mt-8 space-y-3">
                        <label htmlFor="type"
                               className="text-md text-gray-700 block mb-1 font-medium">
                            Feedback Type
                        </label>
                        <input
                            type="text" id="type" placeholder="Type" value={type} disabled
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"/>
                    </div>
                    <div className="mt-8 space-y-3">
                        <label htmlFor="rating"
                               className="text-md text-gray-700 block mb-1 font-medium">
                            Experience rating
                        </label>
                        <StarRating value={rating} disabled/>
                    </div>
                    <div className="mt-8 space-y-3">
                        <label htmlFor="description"
                               className="text-md text-gray-700 block mb-1 font-medium">
                            Message
                        </label>
                        <textarea
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            id="description" rows='4' value={message}
                            placeholder="Provide your feedback comments here." disabled/>
                    </div>
                </div>
            </div>
        </div>
)
}