// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { IGetRecordParams } from './types';

// export const callsApi = createApi({
//     reducerPath: 'postApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://api.skilla.ru/mango/' }),
//     keepUnusedDataFor: 0,
//     endpoints: (builder) => ({
//         getRecord: builder.mutation<string, IGetRecordParams>({
//             query({ recordId, partnership_id, token }) => ({
//                 url: `getRecord?record=&partnership_id=`,
//                 url: `getRecord?record`,
//                 method: 'POST',
//                 body: {
//                     token: '1'
//                 }
//             })
//         })
//     })
// })

// export const { useGetRecordMutation } = callsApi;

export const getTableData = () => {

}