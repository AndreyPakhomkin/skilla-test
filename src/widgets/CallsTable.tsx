import React, { useMemo } from "react";
import MOCK_DATA from '../entities/tableConstants/MOCK_DATA.json'
import { IFormattedCall } from "./tableTypes";
import { getCoreRowModel, useReactTable, flexRender, createColumnHelper } from "@tanstack/react-table";
import { helpedColumns } from "../entities/tableConstants/Columns";


const CallsTable: React.FC = () => {
    // убрать useMemo, когда calls будут лежать в store
    const columns = useMemo(() => helpedColumns, [])
    const data: IFormattedCall[] = useMemo(() => MOCK_DATA, [])
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
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
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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