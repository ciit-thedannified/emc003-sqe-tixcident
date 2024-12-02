import {ChevronLeftIcon} from "@heroicons/react/24/solid/index.js";
import {Button} from "../../../components/ui/button.jsx";
import Tags from "../../../components/Tags.jsx";
import IssueMessagesArea from "../../../components/general/IssueMessagesArea.jsx";
import AxiosConsumer from "../../../contexts/AxiosContext.jsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toaster} from "../../../components/ui/toaster.jsx";
import {DateTime} from "luxon";
import {PriorityTypes, StatusTypes} from "../../../data/enums.js";

export default function ClientDashboardViewTicketPage() {
    const axiosInstance = AxiosConsumer();
    const navigate = useNavigate();
    const {issue_id} = useParams();

    const [title, setTitle] = useState(null);
    const [displayName, setDisplayName] = useState(null);
    const [username, setUsername] = useState(null);
    const [status, setStatus] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);
    const [priority, setPriority] = useState(null);
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState(null);
    const [assigneeDisplayName, setAssigneeDisplayName] = useState(null);
    const [assigneeUsername, setAssigneeUsername] = useState(null);

    useEffect(() => {
        async function fetchMessages() {
            await axiosInstance.get(`/issues/${issue_id}/`)
                .then(response => {
                    if (response.status === 200) {
                        const data = response.data;

                        setTitle(data.title);
                        if (data.author !== null) {
                            setDisplayName(data.author.displayName);
                            setUsername(data.author.username);
                        }
                        setStatus(Object.values(StatusTypes).find(status => data.status === status.value).label);
                        setCreatedAt(DateTime.fromISO(data.createdAt).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS));
                        setPriority(Object.values(PriorityTypes).find(priority => data.priority === priority.value).label);
                        setTags(data.tags);
                        setDescription(data.description);
                        if (data.staff !== null) {
                            setAssigneeDisplayName(data['staff'].displayName);
                            setAssigneeUsername(data['staff'].username);
                        }
                    }
                })
                .catch(error => {
                    toaster.create({
                        type: "error",
                        title: "Something went wrong.",
                        description: "We could not fetch the issue information."
                    });
                });
        }

        fetchMessages()
    }, [axiosInstance, issue_id]);

    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div className="flex items-center space-x-3">
                    <Button className="px-3 py-2 rounded-md shadow-sm text-blue-500 border hover:underline"
                        onClick={() => navigate("../issues")}
                    >
                        <ChevronLeftIcon className="h-6 w-6" aria-hidden="true"/>
                        Go back to Issues
                    </Button>
                </div>
            </div>

            <div className="w-full h-px bg-gray-300 mt-4 mb-4"></div>

            <div className="flex max-h-max bg-gray-100 border-4 gap-3 p-3">
                <div className="w-2/3 space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900">{title ?? "Issue Title"}</h1>
                    <p className="text-gray-800">
                        Submitted by <span
                        className="font-semibold">{displayName !== null ? `${displayName} (@${username ?? "Unknown Author"})` : `@${username ?? `Unknown Author`}`}</span> on {createdAt ?? "Unknown Date"}
                    </p>
                    <p className="text-gray-800">
                        Assigned to: <span
                        className="font-semibold">{(assigneeDisplayName !== null) ? `${assigneeDisplayName} (@${assigneeUsername ?? "None"})` : `@${assigneeUsername ?? `None`}`}</span>
                    </p>
                    <p className="text-gray-800">
                        Status &nbsp; <Tags text={status} bgColor="gray"/> &nbsp; &nbsp;
                        Priority &nbsp; <Tags text={priority} bgColor="gray"/>
                    </p>

                    <div className="w-full h-px bg-gray-300"></div>

                    <p className="text-gray-900 font-semibold">
                        Tags:
                        {
                            tags.length < 0 && <span> None </span>
                        }
                        {
                            tags.length > 0 && tags.map((tag, index) => {
                                return (
                                    <span className="text-gray-500 m-2" key={index}> {tag} </span>
                                )
                            })
                        }
                    </p>


                    <p className="text-gray-900 font-semibold"> Issue Description: </p>
                    <p className="text-gray-900">
                        {description ?? "Description"}
                    </p>
                </div>

                <div className="flex w-1/3 max-h-screen justify-center items-center">
                    <IssueMessagesArea/>
                </div>
            </div>
        </div>
    );
}
