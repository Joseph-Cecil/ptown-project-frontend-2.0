import { apiSlice } from "./apiSlice";
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
                url: THE_URL,
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
        orders: builder.query({
            query: (data) => ({
                url: `${THE_URL}/orders`,
                method: "GET",
                body: data
            })
        })
    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation} = usersApiSlice;