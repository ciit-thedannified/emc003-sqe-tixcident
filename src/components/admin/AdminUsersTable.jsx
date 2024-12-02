import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel, getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import {useEffect, useMemo, useState} from "react";
import {EyeIcon, PencilIcon} from "@heroicons/react/24/solid/index.js";
import {useNavigate} from "react-router-dom";
import {DateTime} from "luxon";
import {FEEDBACK_TYPES, FeedbackTypes, USER_TYPES, UserTypes} from "../../data/enums.js";
import AxiosConsumer from "../../contexts/AxiosContext.jsx";
import {AiFillDelete} from "react-icons/ai";
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent, DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from "../ui/dialog.jsx";
import {Button} from "../ui/button.jsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toaster} from "../ui/toaster.jsx";

const formSchema = z.object({

    id: z.string(),

    type: z.enum(USER_TYPES, {
        message: "Please provide a feedback type.",
    }),

});

export default function AdminUsersTable() {
    const [data, setData] = useState([]);
    const [refreshCount, setRefreshCount] = useState(0);
    const axiosInstance = AxiosConsumer();

    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    async function handleDeleteUser(user_id) {
        const promise = new Promise((resolve, reject) => {
            axiosInstance.delete(`/users/${user_id}`)
                .then(response => {
                    if (response.status === 204) {
                        resolve("User deleted successfully.");
                    }
                    reject("Something went wrong with deleting the user.");
                })
                .catch(error => {
                    reject(error);
                })
        });

        toaster.promise(promise, {
            success: {
                title: "User edited successfully!",
                description: "Redirecting you to users page...",
            },
            error: {
                title: "Something went wrong.",
                description: "Please try editing the user later."
            },
            loading: {
                title: "Submitting...",
                description: "Please wait while we edit the user."
            }
        });
    }

    const onSubmit = (data) => {
        const promise = new Promise((resolve, reject) => {
            axiosInstance.patch(`/users/${data.id}`, {
                type: data.type
            })
                .then(response => {
                    if (response.status === 204) {
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
                title: "User edited successfully!",
                description: "Redirecting you to users page...",
            },
            error: {
                title: "Something went wrong.",
                description: "Please try editing the user later."
            },
            loading: {
                title: "Submitting...",
                description: "Please wait while we edit the user."
            }
        });
    }

    useEffect(() => {
        async function fetchData() {
            await axiosInstance.get('/users/all', {
                params: {
                    page: 1,
                    items: 1000,
                    type: "ALL"
                }
            }).then(response => {
                const data = response.data;
                setData(data);
            }).catch(error => {
                console.error(error);
            });
        }

        fetchData();
    }, [axiosInstance, refreshCount]);

    const columns = [
        {header: "Username", accessorKey: "username"},
        {
            header: "Email", accessorKey: "email"
        },
        {
            header: "Display name",
            accessorKey: "displayName",
            cell: info => info.getValue() ?? "None"
        },
        {
            header: "Type",
            accessorKey: "type",
            cell: info => {
                return (Object.values(UserTypes).find(i => i.value === info.getValue())).label;
            }
        },
        {
            header: "Created at", accessorKey: "createdAt", cell: info => {
                return DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) ?? "None";
            }
        },
        {
            header: "Updated at", accessorKey: "updatedAt", cell: info => {
                return DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) ?? "None";
            }
        },
        {
            header: "Actions", accessorKey: "id", cell: info => {
                const user_id = info.getValue();

                return (
                    <div className="flex space-x-5">
                            <DialogRoot>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <PencilIcon className="w-6 h-6"/>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>
                                            <h1 className="text-3xl">
                                                Edit User
                                            </h1>
                                        </DialogTitle>
                                    </DialogHeader>
                                    <DialogBody>
                                        <div className="w-full max-w bg-white rounded border border-gray-200 p-8">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="p-4">
                                                    <div className="mt-8 space-y-3">
                                                        <input type="hidden" value={user_id} {...register("id")} />
                                                        <label htmlFor="title"
                                                               className="text-md text-gray-700 block mb-1 font-medium">
                                                            Account Type
                                                        </label>
                                                        <select
                                                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                                            id="type" {...register("type")}>
                                                            {Object.values(UserTypes).map((type, index) => {
                                                                return <option key={index}
                                                                               value={type.value}>{type.label}</option>;
                                                            })}
                                                        </select>

                                                        <DialogActionTrigger asChild>
                                                            <Button className="bg-red-500 text-white font-semibold p-3">Cancel</Button>
                                                        </DialogActionTrigger>
                                                        <DialogActionTrigger>
                                                            <Button type="submit" className="bg-green-500 text-white font-semibold p-3 ml-3 mt-3">Save</Button>
                                                        </DialogActionTrigger>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </DialogBody>
                                    <DialogCloseTrigger/>
                                </DialogContent>
                            </DialogRoot>
                        <DialogRoot>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <AiFillDelete className="w-6 h-6"/>
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-3xl font-medium text-gray-700">
                                        Delete this user?
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogBody>
                                    <p>
                                        Are you sure you want to delete this user? This action cannot be undone.
                                    </p>
                                </DialogBody>
                                <DialogFooter>
                                    <DialogActionTrigger asChild>
                                        <Button className="bg-red-500 p-3 text-white"
                                            onClick={() => {
                                                handleDeleteUser(user_id)
                                            }}>
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
                );
            }
        }
    ];


    const [filtering, setFiltering] = useState('')
    const [sorting, setSorting] = useState([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:
            getCoreRowModel(),
        getFilteredRowModel:
            getFilteredRowModel(),
        getSortedRowModel:
            getSortedRowModel(),
        getPaginationRowModel:
            getPaginationRowModel(),
        state:
            {
                globalFilter: filtering,
                sorting:
                sorting,
            }
        ,

        onGlobalFilterChange: setFiltering,
        onSortingChange:
        setSorting,
    });


    return (
        <div className="p-6 bg-gray-100">
            <div className="flex">
                Search Issue:
                <input type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)}
                       placeholder="Search..." className="w-full p-3 mb-4 text-sm text-gray-700 bg-gray-100
            border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            {/* Wrapper to enforce full-width */}
            <div className="overflow-x-auto w-full border border-gray-200 bg-white shadow-md rounded-lg">
                {/* Table with enforced full-width */}
                <table className="w-full table-fixed text-sm text-left">
                    <thead className="bg-gray-200 text-gray-600">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-left w-auto">

                                    {header.isPlaceholder ? null :
                                        (<div>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {
                                                    {asc: '🔼', desc: '🔽'} [header.column.getIsSorted()
                                                    ?? null
                                                        ]
                                                }
                                            </div>
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className="px-4 py-4 text-gray-700 w-auto"
                                >
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                                        {
                                            flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )
                                        }
                                    </p>
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex space-x-2 mt-4">
                <button
                    onClick={() => table.setPageIndex(0)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    First Page
                </button>
                <button
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => table.previousPage()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Previous Page
                </button>
                <button
                    disabled={!table.getCanNextPage()}
                    onClick={() => table.nextPage()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Next Page
                </button>
                <button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Last Page
                </button>
                <button
                    onClick={() => setRefreshCount(refreshCount + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Refresh
                </button>
            </div>
        </div>
    );
}