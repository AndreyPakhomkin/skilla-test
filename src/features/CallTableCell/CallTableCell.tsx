import React from "react";
import IconItem from "../../shared/ui/IconItem/IconItem";
import { flexRender } from "@tanstack/react-table";
import Rate from "../../shared/ui/rate/Rate";
import './CallTableCell.scss'

interface CallTableCellProps {
    columnId: string,
    value: any,
    context: any
}

const CallTableCell: React.FC<CallTableCellProps> = ({ columnId, value, context }) => {
    if (columnId === "type") {
        return <IconItem iconType={value as "incoming" | "outgoing" | "missed" | "noanswer"} />;
    }

    if (columnId === "person_avatar") {
        return <IconItem iconType="user" />;
    }

    if (columnId === "rate") {
        return <Rate rate={value} />;
    }

    return <>{flexRender(value, context)}</>;
};

export default CallTableCell