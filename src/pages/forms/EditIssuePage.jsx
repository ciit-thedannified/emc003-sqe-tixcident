import {useEffect, useState} from "react";
import AdminSearchComponent from "../../components/general/AdminSearchComponent.jsx";
import {ISSUE_TYPES, PRIORITY_TYPES, PriorityTypes, STATUS_TYPES, StatusTypes} from "../../data/enums.js";
import AxiosConsumer from "../../contexts/AxiosContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toaster} from "../../components/ui/toaster.jsx";
import {z} from "zod";
import {ChevronLeftIcon} from "@heroicons/react/24/solid/index.js";
import {Button} from "../../components/ui/button.jsx";

const editIssueSchema = z.object({
    status: z.enum(STATUS_TYPES, {
        required_error: "Please provide an issue status.",
    }),

    priority: z.enum(PRIORITY_TYPES, {
        required_error: "Please provide an issue priority"
    }),
})

export default function EditIssuePage() {
    const axiosInstance = AxiosConsumer();
    const navigate = useNavigate();
    const {issue_id} = useParams();
    const [submitting, setSubmitting] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);

    const [title, setTitle] = useState(null);
    const [status, setStatus] = useState(null);
    const [priority, setPriority] = useState(null);

    useEffect(() => {
        async function fetchMessages() {
            await axiosInstance.get(`/issues/${issue_id}/`)
                .then(response => {
                    if (response.status === 200) {
                        const data = response.data;

                        setTitle(data.title);
                        setStatus(Object.values(StatusTypes).find(status => data.status === status.value).label);
                        setPriority(Object.values(PriorityTypes).find(priority => data.priority === priority.value).label);
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

    const handleStaffSelect = (staff) => {
        if (staff.username === "None") return setSelectedStaff(null);

        setSelectedStaff(staff);
    };

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(editIssueSchema),
    });

    const onSubmit = (data) => {
        setSubmitting(true);

        const {status, priority} = data;
        const staff = !selectedStaff ? null: selectedStaff.id;


        console.log({status, priority, staff});
        const promise = new Promise((resolve, reject) => {
            axiosInstance.patch(`/issues/${issue_id}`, {
                status, priority, staff
            })
                .then(response => {
                    if (response.status === 204) {
                        setSubmitting(false);
                        resolve("Issue submitted successfully.");
                        navigate(`../issues/${issue_id}`);
                    }

                    setSubmitting(false);
                    reject("Something went wrong with submitting the issue.");
                })
                .catch(error => {
                    console.log(error)
                    setSubmitting(false);
                    reject(error);
                })
        });

        toaster.promise(promise, {
            success: {
                title: "Issue edited successfully!",
                description: "Redirecting to your issue..."
            },
            error: {
                title: "Something went wrong.",
                description: "Please try confirming your edits later."
            },
            loading: {
                title: "Submitting...",
                description: "Please wait while we edit your ticket."
            }
        });
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
            <div className="flex-auto justify-start p-4 mb-4">
                <Button className="px-3 py-2 rounded-md shadow-sm text-blue-500 border hover:underline"
                        onClick={() => navigate("../issues")}
                >
                    <ChevronLeftIcon className="h-6 w-6" aria-hidden="true"/>
                    Go back to Issues
                </Button>
            </div>
            <div className="text-3xl text-center font-bold text-gray-900">
                Edit Issue Ticket
            </div>
            <div className="text-md text-center mt-5 text-gray-500">
                Issue ID: {issue_id}
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Title */}
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        disabled={true}
                        value={title}
                    />
                </div>

                {/* Status */}
                <div>
                    <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Status
                    </label>
                    <select
                        id="status"
                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        {...register("status")}
                    >
                        {Object.values(StatusTypes).map((_status, index) => {
                            if (_status.value === status) return <option key={index} value={_status.value}
                                                                         selected>{_status.label}</option>
                            return <option key={index} value={_status.value}>{_status.label}</option>
                        })}
                    </select>
                    {errors.status && <span className="text-red-600">{errors.status.message}</span>}
                </div>

                {/* Priority */}
                <div>
                    <label
                        htmlFor="priority"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Priority
                    </label>
                    <select
                        id="priority"
                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        {...register("priority")}
                    >
                        {Object.values(PriorityTypes).map((_priority, index) => {
                            if (_priority.value === priority) return <option key={index} value={_priority.value}
                                                                             selected>{_priority.label}</option>
                            return <option key={index} value={_priority.value}>{_priority.label}</option>
                        })}
                    </select>
                    {errors.priority && <span className="text-red-600">{errors.priority.message}</span>}
                </div>

                {/* Staff */}
                <div>
                    <label
                        htmlFor="staff"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Staff
                    </label>
                    <AdminSearchComponent onSelect={handleStaffSelect}/>
                    {errors.staff_id && <span className="text-red-600">{errors.staff_id.message}</span>}
                </div>

                {selectedStaff && (
                    <div className="mt-4 text-gray-700"><strong>Selected Staff:</strong> {selectedStaff.username}
                    </div>)}

                {/* Submit */}
                <button
                    className=
                        {
                            !submitting ?
                                "w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                :
                                "w-full px-4 py-2 text-white bg-blue-300 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        }

                >
                    Submit
                </button>
            </form>
        </div>
    );
}
