// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { IGetRecordParams } from './types';

// export const callsApi = createApi({
//     reducerPath: 'postApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://api.skilla.ru/mango/' }),
//     keepUnusedDataFor: 0,
//     endpoints: (builder) => ({
//         getRecord: builder.mutation<IRecord, IGetRecordParams>({
//             query({ recordId, partnership_id, token }) => ({
//                 url: `getRecord?record=${recordId}&partnership_id=${partnership_id}`,
//                 method: 'POST',
//                 body: {
//                     token: token
//                 }
//             })
//         })
//     })
// })

// export const { useGetRecordMutation } = callsApi;