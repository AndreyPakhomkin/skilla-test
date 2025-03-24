import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CallsState, TransformedCallsResponse, ICall } from "./types";
import { callsApi } from "./callsApi";
import { getCallType } from "../../shared/utils/getTypeCall";
import { getRandomCallRate } from "../../shared/utils/getRandomCallRate";
import { getPhoneNumber } from "../../shared/utils/getPhoneNumber";
import { secondsToTime } from "../../shared/utils/secondsToTime";

const initialState: CallsState = {
    calls: [],
    callsLoading: false,
    callsError: {
        errorMessage: null,
        errorStatus: false
    },
    totalRows: 0
}

const callsSlice = createSlice({
    name: 'calls',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(callsApi.endpoints.getCalls.matchPending, (state) => {
                state.callsLoading = true;
                state.callsError.errorStatus = false;
                state.callsError.errorMessage = null;
            })
            .addMatcher(callsApi.endpoints.getCalls.matchFulfilled, (state, action: PayloadAction<TransformedCallsResponse>) => {
                state.callsLoading = false;
                const extendedCalls = action.payload.calls.map((call: ICall) => ({
                    ...call,
                    type: getCallType(call),
                    rate: getRandomCallRate(),
                    phoneNumber: getPhoneNumber({ in_out: call.in_out, to_number: call.to_number, from_number: call.from_number }),
                    duration: secondsToTime(call.time)
                }));
                state.calls = extendedCalls;
                if (state.totalRows === 0) {
                    state.totalRows = action.payload.totalRows;
                }
            })
            .addMatcher(callsApi.endpoints.getCalls.matchRejected, (state, action) => {
                state.callsLoading = false;
                state.callsError.errorMessage = action.error.message || 'Error fetching calls';
                state.callsError.errorStatus = true;
            })
    }
})

export default callsSlice.reducer;