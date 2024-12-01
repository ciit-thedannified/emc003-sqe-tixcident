import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
//import datas from "../../../datas.json";
import { useMemo } from "react";

export default function AdminTable() {
    const data = useMemo(() => datas, []);

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

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

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
                                        className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-left w-auto">
                                            
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
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
        </div>
    );
}
