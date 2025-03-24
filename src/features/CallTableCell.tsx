import React from "react";
import Icon from "../shared/ui/Icon";
import { flexRender } from "@tanstack/react-table";
import Rate from "../shared/ui/rate/Rate";

interface CallTableCellProps {
    columnId: string,
    value: any,
    context: any
}

const CallTableCell: React.FC<CallTableCellProps> = ({ columnId, value, context }) => {
    if (columnId === "type") {
        return <Icon iconType={value as "incoming" | "outgoing" | "missed" | "noAnswer"} />;
    }

    if (columnId === "person_avatar") {
        return <Icon iconType="user" />;
    }

    if (columnId === "rate") {
        return <Rate rate={value} />;
    }

    return <>{flexRender(value, context)}</>;
};

export default CallTableCell