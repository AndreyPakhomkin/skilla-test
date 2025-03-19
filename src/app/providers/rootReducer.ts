import { combineReducers } from '@reduxjs/toolkit';
import callsReducer from '../../entities/calls/callsSlice';
import { callsApi } from '../../entities/calls/callsApi';

const rootReducer = combineReducers({
    storedCalls: callsReducer,
    [callsApi.reducerPath]: callsApi.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; 