import React, { useEffect } from "react";
import { useGetCallsMutation } from "../../entities/calls/callsApi";
import { useAppSelector } from "../../shared/hooks/storeHooks";
import { IGetCallsParams } from "../../entities/calls/types";
import { getFormattedToday } from "../../shared/utils/getFormattedDate";
import { Loader } from "../../shared/ui/Loader";
import { ErrorItem } from "../../shared/ui/ErrorItem";
import { CallsTable } from "../../widgets/CallsList";

const apiToken = process.env.REACT_APP_TOKEN;

const CallsTablePage: React.FC = () => {
    const { calls, callsError, callsLoading } = useAppSelector((state) => state.storedCalls)
    const hasCalls = calls.length !== 0;
    const [getCalls] = useGetCallsMutation();

    const queryParams: IGetCallsParams = {
        today: getFormattedToday(),
        body: {
            token: apiToken
        }
    }

    useEffect(() => {
        getCalls(queryParams);
    }, [])

    return (
        <>
            {callsLoading && <Loader />}
            {callsError.errorStatus && <ErrorItem errorMessage={callsError.errorMessage} />}
            {hasCalls && <CallsTable calls={calls} />}
        </>
    )
}

export default CallsTablePage