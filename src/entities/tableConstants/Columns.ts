import { createColumnHelper } from "@tanstack/react-table";
import { IFormattedCall } from "../../widgets/tableTypes";

export const COLUMNS = [
    {
        Header: 'Тип',
        accessorKey: 'type',
    },
    {
        Header: 'Время',
        accessorKey: 'date',
    },
    {
        Header: 'Сотрудник',
        accessorKey: 'person_avatar',
    },
    {
        Header: 'Звонок',
        accessorKey: 'number',
    },
    {
        Header: 'Источник',
        accessorKey: 'line_name',
    },
    {
        Header: 'Оценка',
        accessorKey: 'rate',
    },
    {
        Header: 'Длительность',
        accessorKey: 'time',
    },
];

const columnHelper = createColumnHelper<IFormattedCall>()
export const helpedColumns = [
    columnHelper.accessor('Тип', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Время', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Сотрудник', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Звонок', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Источник', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Оценка', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Длительность', {
        cell: info => info.getValue(),
    }),
]