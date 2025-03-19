import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CallsState, ICall } from "./types";
import { callsApi } from "./callsApi";

const initialState: CallsState = {
    calls: [],
    callsLoading: false,
    callsError: {
        errorMessage: null,
        errorStatus: false
    },
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
            .addMatcher(callsApi.endpoints.getCalls.matchFulfilled, (state, action: PayloadAction<ICall[]>) => {
                state.callsLoading = false;
                state.calls = action.payload;
            })
            .addMatcher(callsApi.endpoints.getCalls.matchRejected, (state, action) => {
                state.callsLoading = false;
                state.callsError.errorMessage = action.error.message || 'Error fetching calls';
                state.callsError.errorStatus = true;
            })
    }
})

export default callsSlice.reducer;