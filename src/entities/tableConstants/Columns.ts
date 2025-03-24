import { createColumnHelper } from "@tanstack/react-table";
import { ICall } from "../calls/types";

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

const columnHelper = createColumnHelper<ICall>()

export const helpedColumns = [
    columnHelper.accessor('type', {
        header: 'Тип',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('date', {
        header: 'Время',
        cell: info => {
            const timeNodate = info.getValue().slice(-8).slice(0, 5)
            return timeNodate
        },
    }),
    columnHelper.accessor('person_avatar', {
        header: 'Сотрудник',
        cell: () => 'user',
    }),
    columnHelper.accessor('to_number', {
        header: 'Звонок',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('source', {
        header: 'Источник',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('rating', {
        header: 'Оценка',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('time', {
        header: 'Длительность',
        cell: info => info.getValue(),
    }),
]