import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICall, IGetCallsParams } from './types';

export const callsApi = createApi({
    reducerPath: 'callApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.skilla.ru/mango/' }),
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
        getCalls: builder.mutation<ICall[], IGetCallsParams>({
            query: ({ today, body }) => ({
                url: `getList?date_start=2020-01-01&date_end=${today}`,
                method: 'POST',
                body
            }),
            transformResponse: (response: ICall[]) => {
                return response;
            }
        })
    })
})

export const { useGetCallsMutation } = callsApi;