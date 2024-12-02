import {zodResolver} from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import {z} from "zod";
import {Toaster, toaster} from '../../components/ui/toaster.jsx';
import {
    FEEDBACK_MESSAGE_MAX_LENGTH,
    FEEDBACK_MESSAGE_MIN_LENGTH,
    FEEDBACK_TITLE_MAX_LENGTH,
    FEEDBACK_TITLE_MIN_LENGTH
} from "../../data/constants.js";
import {FEEDBACK_TYPES, FeedbackTypes} from "../../data/enums.js";
import StarRating from "../../components/general/StarRating.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import AxiosConsumer from "../../contexts/AxiosContext.jsx";

const formSchema = z.object({
    title: z.string({
        required_error: "Please provide an feedback title.",
    })
        .min(FEEDBACK_TITLE_MIN_LENGTH)
        .max(FEEDBACK_TITLE_MAX_LENGTH),

    type: z.enum(FEEDBACK_TYPES, {
        message: "Please provide a feedback type.",
    }),

    rating: z.number({
        required_error: "Please provide a feedback rating",
    })
        .min(1)
        .max(5),

    message: z.string({
        required_error: "Please provide an issue description.",
    })
        .min(FEEDBACK_MESSAGE_MIN_LENGTH)
        .max(FEEDBACK_MESSAGE_MAX_LENGTH),

});

export default function FeedbackFormPage() {
    const axiosInstance = AxiosConsumer();
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        setSubmitting(true);

        const promise = new Promise((resolve, reject) => {
            axiosInstance.post('/feedbacks', data)
                .then(response => {
                    if (response.status === 201) {
                        resolve("Feedback submitted successfully.");

                        setSubmitting(false);
                        navigate('../');
                    }

                    setSubmitting(false);
                    reject("Something went wrong with submitting the feedback.");
                })
                .catch(error => {
                    setSubmitting(false);
                    reject(error);
                })
        });

        toaster.promise(promise, {
            success: {
                title: "Thank you for your feedback!",
                description: "Redirecting you to the dashboard...",
            },
            error: {
                title: "Something went wrong.",
                description: "Please try submitting another feedback later."
            },
            loading: {
                title: "Submitting...",
                description: "Please wait while we submit your feedback."
            }
        });
    }

    return (
        <div className="w-full max-w-4xl mx-auto items-center">
            <div className="w-full max-w bg-white rounded border border-gray-200 p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-3xl text-center font-bold">
                        Submit a Feedback
                    </div>
                    <div className="text-md text-center mt-5 text-gray-500">
                        Your feedback will help us improve our quality, service, and support.
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
                                Feedback Type
                            </label>
                            <select
                                className={
                                    errors.type ?
                                        "bg-gray-100 border border-red-500 rounded py-1 px-3 block focus:ring-red-500 focus:border-red-500 text-gray-700 w-full"
                                        :
                                        "bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                }
                                id="type" {...register("type")}>
                                {Object.values(FeedbackTypes).map((type, index) => {
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
                                How would you rate your experience?
                            </label>
                            <Controller
                                name="rating"
                                control={control}
                                render={({ field }) => <StarRating {...field} />}
                            />
                            {
                                errors.rating && <span className="text-red-600 mt-4">{errors.rating.message}</span>
                            }
                        </div>
                        <div className="mt-8 space-y-3">
                            <label htmlFor="description"
                                   className="text-md text-gray-700 block mb-1 font-medium">
                                Message
                            </label>
                            <textarea
                                className={
                                    errors.message ?
                                        "bg-gray-100 border border-red-500 rounded py-1 px-3 block focus:ring-red-500 focus:border-red-500 text-gray-700 w-full"
                                        :
                                        "bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                }
                                id="description" rows='4'
                                placeholder="Provide your feedback comments here." {...register("message")}/>
                            {
                                errors.message && <span className="text-red-600">{errors.message.message}</span>
                            }
                        </div>
                        <div className="mt-8 space-y-3">
                            <button
                                className={`w-full ${!submitting ? 'bg-blue-500' : 'bg-blue-200'} p-3 font-bold text-white rounded-xl`}
                                type="submit" disabled={submitting}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}