import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "https://sprall-buy-api.onrender.com"}),
    tagTypes:['Order', 'User'],
    endpoints: builder => ({})
})
