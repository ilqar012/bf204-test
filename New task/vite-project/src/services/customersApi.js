//redux-toolkit-query - RTK
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  endpoints: (builder) => ({
    //endpoints
    getAllCustomers: builder.query({
      query: () => `customers`,
    }),
    getCustomerByID: builder.query({
      query: (id) => `customers/${id}`,
    }),
    deleteCustomerByID: builder.mutation({
      query: (id) => ({
        url: `customers/${id}`,
        method: "DELETE",
      }),
    }),
    postCustomer: builder.mutation({
      query: (payload)=>({
        url: 'customers',
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }),
    patchCustomer: builder.mutation({
      query: (id, payload)=>({
        url: `customers/${id}`,
        method: 'PATCH',
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
  useGetAllCustomersQuery,
  useGetCustomerByIDQuery,
  useDeleteCustomerByIDMutation,
  usePostCustomerMutation,
  usePatchCustomerMutation
} = customersApi;