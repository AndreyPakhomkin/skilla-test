import React, { useEffect } from "react";
import { useGetCallsMutation } from "../entities/calls/callsApi";
import { useAppSelector } from "../shared/hooks/storeHooks";
import { IGetCallsParams } from "../entities/calls/types";
import { getFormattedDate } from "../shared/utils/getFormattedDate";
import Loader from "../shared/ui/Loader/Loader";
import ErrorItem from "../shared/ui/ErrorItem/ErrorItem";
import CallsTable from "../widgets/CallsTable";


const CallsTablePage: React.FC = () => {
    const { calls, callsError, callsLoading } = useAppSelector((state) => state.storedCalls)
    const hasCalls = calls.length !== 0;
    const [getCalls] = useGetCallsMutation();

    useEffect(() => {
        const queryParams: IGetCallsParams = {
            today: getFormattedDate(),
            periodStart: getFormattedDate(3)
        }
        getCalls(queryParams);
    }, [])

    return (
        <div>
            {callsLoading && !hasCalls && <Loader />}
            {callsError.errorStatus && <ErrorItem errorMessage={callsError.errorMessage} />}
            {hasCalls && <CallsTable />}
            {!callsLoading && !hasCalls && <ErrorItem errorMessage={"No data found"} />}
        </div>
    )
}

export default CallsTablePage