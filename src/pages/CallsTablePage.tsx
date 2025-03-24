import React, { useEffect } from "react";
import { useGetCallsMutation } from "../entities/calls/callsApi";
import { useAppSelector } from "../shared/hooks/storeHooks";
import { IGetCallsParams } from "../entities/calls/types";
import { getFormattedToday } from "../shared/utils/getFormattedDate";
import Loader from "../shared/ui/Loader";
import ErrorItem from "../shared/ui/ErrorItem";
import CallsTable from "../widgets/CallsTable";


const CallsTablePage: React.FC = () => {
    const { calls, callsError, callsLoading } = useAppSelector((state) => state.storedCalls)
    const hasCalls = calls.length !== 0;
    const [getCalls] = useGetCallsMutation();

    useEffect(() => {
        const queryParams: IGetCallsParams = {
            today: getFormattedToday(),
        }
        getCalls(queryParams);
    }, [])

    return (
        <div>
            {callsLoading && <Loader />}
            {/* {callsError.errorStatus && <ErrorItem errorMessage={callsError.errorMessage} />} */}
            {hasCalls && <CallsTable />}
        </div>
    )
}

export default CallsTablePage