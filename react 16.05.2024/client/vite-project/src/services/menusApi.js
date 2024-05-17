//redux-toolkit-query - RTK
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MenusApi = createApi({
    reducerPath: "menusApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
    endpoints: (builder) => ({
        //endpoints
        getAllMenus: builder.query({
            query: () => `menus`,
        }),
        getMenuByID: builder.query({
            query: (id) => `menus/${id}`,
        }),
        deleteMenuByID: builder.mutation({
            query: (id) => ({
                url: `menus/${id}`,
                method: "DELETE",
            }),
        }),
        postMenu: builder.mutation({
            query: (payload) => ({
                url: 'menus',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    }),
});

//auto-generate hook (use + endpoint + Query)
export const {
    useGetAllMenusQuery,
    useGetMenuByIDQuery,
    useDeleteMenuByIDMutation,
    usePostMenuMutation,
} = MenusApi;