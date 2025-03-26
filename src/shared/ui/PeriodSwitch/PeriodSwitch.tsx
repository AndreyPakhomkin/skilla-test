import React, { useState } from "react";
import IconItem from "../IconItem/IconItem";
import { useGetCallsMutation } from "../../../entities/calls/callsApi";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { IGetCallsParams } from "../../../entities/calls/types";
import { useAppSelector } from "../../hooks/storeHooks";
import { CircularProgress } from "@mui/material";
import "./PeriodSwitch.scss";

const periods = ["3 дня", "Неделя", "Месяц"];
const periodValues = [3, 7, 30];

const PeriodSwitch: React.FC = () => {
    const { callsLoading } = useAppSelector((state) => state.storedCalls);
    const [periodIndex, setPeriodIndex] = useState(0);
    const [getCalls] = useGetCallsMutation();

    const handleChangePeriod = (direction: "prev" | "next") => {
        setPeriodIndex((prevIndex) => {
            const newIndex =
                direction === "prev"
                    ? Math.max(0, prevIndex - 1)
                    : Math.min(periods.length - 1, prevIndex + 1);

            if (newIndex === prevIndex) return prevIndex;

            const queryParams: IGetCallsParams = {
                today: getFormattedDate(),
                periodStart: getFormattedDate(periodValues[newIndex])
            };

            getCalls(queryParams);
            return newIndex;
        });
    };

    return (
        <div className="period-container">
            {callsLoading && <div className="period-loader"><CircularProgress size={15} /></div>}
            <div className="period-switch">
                <IconItem iconType="arrowleft" onClick={() => handleChangePeriod("prev")} />
                <div>{periods[periodIndex]}</div>
                <IconItem iconType="arrowright" onClick={() => handleChangePeriod("next")} />
            </div>
        </div>
    );
};

export default PeriodSwitch;
