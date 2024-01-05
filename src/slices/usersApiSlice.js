import { apiSlice } from "./apiSlice";
const BaseUrl = "https://ptbuy-api.onrender.com/";
const THE_URL = 'api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${BaseUrl}${THE_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${BaseUrl}${THE_URL}`,
                method: 'POST',
                body: data,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url:`${THE_URL}/logout`,
                method: 'POST'
            })
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url:`${BaseUrl}api/new-order`,
                method: 'POST',
                body: data,
            })
        }),
        orders: builder.query({
            query: (data) => ({
                url: `${BaseUrl}${THE_URL}/orders`,
                method: "GET",
                body: data
            })
        })
    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useCreateOrderMutation, useOrdersQuery} = usersApiSlice;