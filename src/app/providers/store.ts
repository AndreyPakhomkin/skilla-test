import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { callsApi } from '../../entities/calls/callsApi';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(callsApi.middleware, callsApi.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;