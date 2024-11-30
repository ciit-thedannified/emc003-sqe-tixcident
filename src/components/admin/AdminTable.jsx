import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel } from "@tanstack/react-table";
import DATA from "../../../data.json";
import { useMemo, useState } from "react";

export default function AdminTable() {
    const data = useMemo(() => DATA, []);

    const columns = [
        { header: "Title", accessorKey: "title" },
        { header: "Author", accessorKey: "author" },
        { header: "Status", accessorKey: "status" },
        { header: "Staff", accessorKey: "staff" },
        { header: "Priority", accessorKey: "priority" },
        { header: "Type", accessorKey: "type" },
        { header: "Created at", accessorKey: "createdAt" },
        { header: "Updated at", accessorKey: "updatedAt" },
    ];

    const [sorting, setSorting] = useState([])

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getSortedRowModel: getSortedRowModel(), 
        state: {sorting: sorting,}, onSortingChange: setSorting,
    });

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
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
<<<<<<< Updated upstream

                                        {flexRender(
=======
                                            
                                        {header.isPlaceholder ? null : 
                                        (<div>
                                            {flexRender(
>>>>>>> Stashed changes
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
