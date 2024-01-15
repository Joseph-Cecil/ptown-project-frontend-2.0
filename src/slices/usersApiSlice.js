import { apiSlice } from "./apiSlice";
// const BaseUrl = import.meta.env.VITE_BACKEND_URL
const THE_URL = 'api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${THE_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${THE_URL}`,
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
                url:`api/new-order`,
                method: 'POST',
                body: data,
            })
        }),
        orders: builder.query({
            query: (data) => ({
                url: `${THE_URL}/orders`,
                method: "GET",
                body: data
            })
        })
    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useCreateOrderMutation, useOrdersQuery} = usersApiSlice;