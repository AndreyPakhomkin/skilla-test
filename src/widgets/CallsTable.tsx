import React, { useEffect, useMemo, useState } from "react";
import {
    getCoreRowModel,
    useReactTable,
    flexRender,
    getSortedRowModel,
    SortingState,
    ColumnFiltersState
} from "@tanstack/react-table";
import { helpedColumns } from "../entities/tableConstants/Columns";
import './CallsTable.scss'
import { useAppSelector } from "../shared/hooks/storeHooks";
import CallTableCell from "../features/CallTableCell";
import Icon from "../shared/ui/Icon";


const CallsTable: React.FC = () => {
    const data = useAppSelector((state) => state.storedCalls.calls);
    const columns = useMemo(() => helpedColumns, []);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            columnFilters
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
    });

    useEffect(() => console.log('CallsTable render'))
    useEffect(() => console.log('Calls', data), [data])

    return (
        <div className="table-container">
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="head-tableRow">
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className={`header ${header.id}`} onClick={header.column.getToggleSortingHandler()}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    {header.column.getIsSorted() === "asc" ? <Icon iconType="arrowdown" /> : header.column.getIsSorted() === "desc" ? <Icon iconType="arrowup" /> : ""}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className={`column-${cell.column.id}`}
                                >
                                    <CallTableCell
                                        columnId={cell.column.id}
                                        value={cell.getValue()}
                                        context={cell.getContext()}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    )
}

export default CallsTable