import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import datas from "../../data/tixcident.issues.json";
import {useMemo, useState} from "react";
import {EyeIcon} from "@heroicons/react/24/solid/index.js";
import {useNavigate} from "react-router-dom";
import {DateTime} from "luxon";
import {IssueTypes, PriorityTypes, StatusTypes} from "../../data/enums.js";

export default function ClientIssueTable() {
    const navigate = useNavigate();
    const data = useMemo(() => datas, []);

    const columns = [
        { header: "Title", accessorKey: "title" },
        {
            header: "Status",
            accessorKey: "status",
            cell: info => {
                return Object.values(StatusTypes).find(s => s.value === info.getValue()).label;
            }
        },
        { header: "Staff", accessorKey: "staff", cell: info => {
                return info.getValue() ?? "None";
            }
        },
        {
            header: "Priority",
            accessorKey: "priority",
            cell: info => {
                return Object.values(PriorityTypes).find(p => p.value === info.getValue()).label;
            }
        },
        {
            header: "Type",
            accessorKey: "type",
            cell: info => {
                return Object.values(IssueTypes).find(i => i.value === info.getValue()).label;
            }
        },
        { header: "Created at", accessorKey: "createdAt", cell: info => {
                return DateTime.fromISO(info.getValue()['$date']).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) ?? "None";
            }
        },
        { header: "Updated at", accessorKey: "updatedAt", cell: info => {
                return DateTime.fromISO(info.getValue()['$date']).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) ?? "None";
            }
        },
        { header: "Actions", accessorKey: "_id", cell: info => {
            const issue_id = info.getValue()["$oid"];

            return (
                    <div className="flex space-x-5">
                        <button onClick={() => {
                            navigate(`/u/issues/${issue_id}`);
                        }}>
                            <EyeIcon className="w-6 h-6" />
                        </button>
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
        state: {
            globalFilter: filtering,
            sorting: sorting,
        },

        onGlobalFilterChange: setFiltering,
        onSortingChange: setSorting,
    });


    return (
        <div className="p-6 bg-gray-100">
            <div className="flex">
                Search Issue:
                <input type = "text" value={filtering} onChange={(e) => setFiltering(e.target.value)}placeholder="Search..." className="w-full p-3 mb-4 text-sm text-gray-700 bg-gray-100
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
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
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
            </div>
        </div>
    );
}