import React, { useEffect, useMemo } from "react";
import { getCoreRowModel, useReactTable, flexRender } from "@tanstack/react-table";
import { helpedColumns } from "../entities/tableConstants/Columns";
import './CallsTable.scss'
import { useAppSelector } from "../shared/hooks/storeHooks";
import CallIcon from "../shared/ui/Icon";
import CallTableCell from "../features/CallTableCell";


const CallsTable: React.FC = () => {
    // убрать useMemo, когда calls будут лежать в store
    const data = useAppSelector((state) => state.storedCalls.calls)
    const columns = useMemo(() => helpedColumns, [])
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel()
    })

    useEffect(() => console.log('CallsTable render'))
    useEffect(() => console.log('Calls', data), [data])


    return (
        <div className="table-container">
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="head-tableRow">
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className={`header-${header.id}`}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
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