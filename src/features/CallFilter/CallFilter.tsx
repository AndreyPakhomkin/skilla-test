import React from "react";
import { Select, MenuItem } from "@mui/material";
import { selectStyle } from "./CallFilterStyle";

interface CallFilterProps {
    filter: "all" | "incoming" | "outgoing";
    setFilter: (filter: "all" | "incoming" | "outgoing") => void;
}

const CallFilter: React.FC<CallFilterProps> = ({ filter, setFilter }) => {
    return (
        <div className="select-wrapper">
            <Select
                sx={selectStyle}
                disableUnderline={true}
                labelId="filter-select"
                id="filter-select-small"
                value={filter}
                onChange={(e) => setFilter(e.target.value as "all" | "incoming" | "outgoing")}
            >
                <MenuItem value="all">Все</MenuItem>
                <MenuItem value="incoming">Входящие</MenuItem>
                <MenuItem value="outgoing">Исходящие</MenuItem>
            </Select>
        </div>
    );
};

export default CallFilter;
