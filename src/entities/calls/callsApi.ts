import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICall, ICallsResponse, IGetCallsParams, TransformedCallsResponse } from './types';

const apiToken = process.env.REACT_APP_TOKEN;

export const callsApi = createApi({
    reducerPath: 'callApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.skilla.ru/mango/' }),
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
        getCalls: builder.mutation<TransformedCallsResponse, IGetCallsParams>({
            query: ({ today, periodStart }) => ({
                url: `getList?date_start=${periodStart}&date_end=${today}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + apiToken,
                }
            }),
            transformResponse: (response: ICallsResponse): TransformedCallsResponse => ({
                calls: response.results,
                totalRows: response.total_rows
            })
        })
    })
})

export const { useGetCallsMutation } = callsApi;