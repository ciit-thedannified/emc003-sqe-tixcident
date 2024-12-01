import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Toaster, toaster} from '../../components/ui/toaster.jsx';
import {
    ISSUE_DESCRIPTION_MAX_LENGTH,
    ISSUE_DESCRIPTION_MIN_LENGTH,
    ISSUE_TITLE_MAX_LENGTH,
    ISSUE_TITLE_MIN_LENGTH
} from "../../data/constants.js";
import {ISSUE_TYPES, IssueTypes} from "../../data/enums.js";

const issueSchema = z.object({
    title: z.string({
        required_error: "Please provide an issue title.",
    })
        .min(ISSUE_TITLE_MIN_LENGTH)
        .max(ISSUE_TITLE_MAX_LENGTH),

    type: z.enum(ISSUE_TYPES.slice(1), {
        message: "Please provide an issue type.",
    }),

    tags: z.string(),

    description: z.string({
        required_error: "Please provide an issue description.",
    })
        .min(ISSUE_DESCRIPTION_MIN_LENGTH)
        .max(ISSUE_DESCRIPTION_MAX_LENGTH),

})

export default function IssueFormPage() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(issueSchema),
    });


    const onSubmit = (data) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000);
        })

        toaster.create(promise, {
            success: {
                title: "Issue submitted successfully.",
            },
            error: {
                title: "Something went wrong.",
                description: "Please try submitting another ticket later."
            },
            loading: {
                title: "Submitting...",
                description: "Please wait while we submit your ticket."
            }
        });
    }

    return (
        <div className="w-full max-w-4xl mx-auto items-center">
            <div className="w-full max-w bg-white rounded border border-gray-200 p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-3xl text-center font-bold">
                        Create an Issue Ticket
                    </div>
                    <div className="text-md text-center mt-5 text-gray-500">
                        Please enter your complete details of the issue or report.
                    </div>
                    <div className="p-4 gap-4">
                        <div className="mt-8 space-y-3">
                            <label htmlFor="title"
                                   className="text-md text-gray-700 block mb-1 font-medium">
                                Title
                            </label>
                            <input
                                className={
                                    errors.title ?
                                        "bg-gray-100 border border-red-500 rounded py-1 px-3 block focus:ring-red-500 focus:border-red-500 text-gray-700 w-full"
                                        :
                                        "bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                }

                                type="text" id="title" placeholder="Subject" {...register("title")}/>
                            {
                                errors.title && <span className="text-red-600">{errors.title.message}</span>
                            }
                        </div>
                        <div className="mt-8 space-y-3">
                            <label htmlFor="type"
                                   className="text-md text-gray-700 block mb-1 font-medium">
                                Type
                            </label>
                            <select
                                className={
                                    errors.type ?
                                        "bg-gray-100 border border-red-500 rounded py-1 px-3 block focus:ring-red-500 focus:border-red-500 text-gray-700 w-full"
                                        :
                                        "bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                }
                                id="type" {...register("type")}>
                                {Object.values(IssueTypes).map((type, index) => {
                                    return <option key={index} value={type.value}>{type.label}</option>;
                                })}
                            </select>
                            {
                                errors.type && <span className="text-red-600">{errors.type.message}</span>
                            }
                        </div>
                        <div className="mt-8 space-y-3">
                            <label htmlFor="tags"
                                   className="text-md text-gray-700 block mb-1 font-medium">
                                Tags
                            </label>
                            <input
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                id="tags" placeholder="Separate tags with semi-colon (;)" {...register("tags")} />
                        </div>
                        <div className="mt-8 space-y-3">
                            <label htmlFor="description"
                                   className="text-md text-gray-700 block mb-1 font-medium">
                                Description
                            </label>
                            <textarea
                                className={
                                    errors.description ?
                                        "bg-gray-100 border border-red-500 rounded py-1 px-3 block focus:ring-red-500 focus:border-red-500 text-gray-700 w-full"
                                        :
                                        "bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                }
                                id="description" rows='4' placeholder="Provide a detailed explanation of your issue." {...register("description")}/>
                            {
                                errors.description && <span className="text-red-600">{errors.description.message}</span>
                            }
                        </div>
                        <div className="mt-8 space-y-3">
                            <button className="w-full bg-blue-500 p-3 font-bold text-white rounded-xl" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}