import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getFilteredRowModel,
    getSortedRowModel, getPaginationRowModel
} from "@tanstack/react-table";
import {useEffect, useMemo, useState} from "react";
import AxiosConsumer from "../../contexts/AxiosContext.jsx";
import {useNavigate} from "react-router-dom";
import {FeedbackTypes, IssueTypes} from "../../data/enums.js";
import {DateTime} from "luxon";
import {EyeIcon} from "@heroicons/react/24/solid/index.js";
import {AiFillDelete} from "react-icons/ai";
import {
    DialogActionTrigger,
    DialogBody, DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader, DialogRoot,
    DialogTitle,
    DialogTrigger
} from "../ui/dialog.jsx";
import {Button} from "../ui/button.jsx";
import {toaster} from "../ui/toaster.jsx";

export default function AdminFeedbackTable() {
    const [data, setData] = useState([]);
    const axiosInstance = AxiosConsumer();
    const navigate = useNavigate();
    const [refreshCount, setRefreshCount] = useState(0);

    async function handleDeleteFeedback(feedback_id) {
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

    useEffect(() => {
        async function fetchData() {
            await axiosInstance.get('/feedbacks/all', {
                params: {
                    page: 1,
                    items: 1000,
                }
            }).then(response => {
                const data = response.data;
                setData(data);
            }).catch(error => {
                console.error(error);
            });
        }

        fetchData();
    }, [refreshCount]);

    const columns = [
        {header: "Title", accessorKey: "title"},
        {
            header: "Author", accessorKey: "author", cell: value => {
                if (value.getValue() === null) return "Unknown user";
                else return value.getValue().username;
            }
        },
        {
            header: "Type",
            accessorKey: "type",
            cell: value => (Object.values(FeedbackTypes).find(f => f.value === value.getValue())).label,
        },
        {header: "Rating", accessorKey: "rating"},
        {
            header: "Created at", accessorKey: "createdAt", cell: info =>
                DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) ?? "None"
        },
        {
            header: "Updated at", accessorKey: "updatedAt", cell: info =>
                DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) ?? "None"
        },
        {
            header: "Actions", accessorKey: "_id", cell: info => {
                return (
                    <div className="flex space-x-5">
                        <button onClick={() => {
                            navigate(`/a/feedbacks/${info.getValue()}`);
                        }}>
                            <EyeIcon className="w-6 h-6"/>
                        </button>
                        <DialogRoot>
                            <DialogTrigger asChild>
                                <Button>
                                    <AiFillDelete className="w-6 h-6"/>
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
                                                onClick={async () => {
                                                    await handleDeleteFeedback(info.getValue());
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
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            globalFilter: filtering,
            sorting: sorting,
        },

        onGlobalFilterChange: setFiltering,
        onSortingChange: setSorting,
    });

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <input type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)} placeholder="Search..."
                   className="w-full p-3 mb-4 text-sm text-gray-700 bg-gray-100
            border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
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
                    {!data.length ?
                        <tr>
                            <td colSpan={table.getAllColumns().length} className="px-4 py-4 text-center text-gray-500">
                                No records found.
                            </td>
                        </tr>
                        :
                        table.getRowModel().rows.map((row) => (
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
                        ))
                    }
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

