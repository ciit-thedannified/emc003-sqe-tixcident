import IssueMessage from "../IssueMessage.jsx";
import {useEffect, useState} from "react";
import AxiosConsumer from "../../contexts/AxiosContext.jsx";
import {useParams} from "react-router-dom";
import {toaster} from "../ui/toaster.jsx";
import {DateTime} from "luxon";

export default function IssueMessagesArea() {
    const axiosInstance = AxiosConsumer();
    const {issue_id} = useParams();

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchMessages() {
            await axiosInstance.get(`/issues/${issue_id}/messages/`, {
                params: {
                    items: 100,
                }
            })
                .then(response => {
                    if (response.status === 200)
                        setMessages(response.data);
                })
                .catch(error => {
                    toaster.create({
                        type: "error",
                        title: "Something went wrong.",
                        description: "We could not fetch the issue messages."
                    });
                });
        }
        
        setLoading(true);
        fetchMessages()
            .finally(() => setLoading(false));
    }, [axiosInstance, issue_id]);

    return (
        <div className="border-2 border-gray-300 m-2 p-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-900 text-center m-2">Messages</h1>
            {/*Editable Area adjustments*/}
            <div
                className="flex flex-col-reverse border-2 border-gray-300 text-gray-900 m-2 overflow-y-auto h-[400px] w-[400px] p-2 gap-2">
                {
                    loading && "Loading..."
                }
                {
                    messages.length < 0 && "No messages found."
                }
                {
                    messages.map((message, index) => {
                        console.log(message)
                        return <IssueMessage
                            key={index} 
                            display_name={message.author.displayName} 
                            username={message.author.username} 
                            date={DateTime.fromISO(message.createdAt).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}
                        >
                            {message.message}
                        </IssueMessage>
                    })
                }

            </div>

            <textarea
                className="w-[95%] bg-gray-200 p-2 rounded text-gray-900 m-1.5"
                rows="2"
                placeholder="Enter your text here"
            >
            </textarea>
            <button
                className="w-[95%] m-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition disabled:bg-gray-300">
                Send
            </button>
        </div>
    )
}