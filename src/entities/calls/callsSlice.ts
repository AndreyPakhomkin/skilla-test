import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CallsState, TransformedCallsResponse, ICall } from "./types";
import { callsApi } from "./callsApi";
import { getCallType } from "../../shared/utils/getTypeCall";

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
                const callsWithType = action.payload.calls.map((call: ICall) => ({
                    ...call,
                    type: getCallType(call),
                }));
                state.calls = callsWithType;
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