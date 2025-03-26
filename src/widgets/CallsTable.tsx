import React, { useEffect, useMemo, useState } from "react";
import {
    getCoreRowModel,
    useReactTable,
    flexRender,
    getSortedRowModel,
    SortingState
} from "@tanstack/react-table";
import { helpedColumns } from "../entities/tableConstants/Columns";
import './CallsTable.scss'
import { useAppSelector } from "../shared/hooks/storeHooks";
import CallTableCell from "../features/CallTableCell/CallTableCell";
import IconItem from "../shared/ui/IconItem/IconItem";
import CallFilter from "../features/CallFilter/CallFilter";
import PeriodSwitch from "../shared/ui/PeriodSwitch/PeriodSwitch";


const CallsTable: React.FC = () => {
    const calls = useAppSelector((state) => state.storedCalls.calls);
    const columns = useMemo(() => helpedColumns, []);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [filter, setFilter] = useState<"all" | "incoming" | "outgoing">("all");
    const filteredData = useMemo(() => {
        return calls.filter(call => {
            if (filter === "incoming") return call.in_out === 1;
            if (filter === "outgoing") return call.in_out === 0;
            return true;
        });
    }, [calls, filter]);

    const table = useReactTable({
        columns,
        data: filteredData,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: { sorting },
        onSortingChange: setSorting,
    });

    useEffect(() => console.log('CallsTable render'))
    useEffect(() => console.log('Calls', calls), [calls])
    useEffect(() => console.log("Filtered Calls", filteredData), [filteredData]);

    return (
        <div className="table-container">
            <div className="toolbar">
                <CallFilter filter={filter} setFilter={setFilter} />
                <PeriodSwitch />
            </div>
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
                                    {header.column.getIsSorted() === "asc" ? <IconItem iconType="arrowdown" /> : header.column.getIsSorted() === "desc" ? <IconItem iconType="arrowup" /> : ""}
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