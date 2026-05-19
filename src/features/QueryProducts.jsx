import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/"
  }),

  endpoints: (builders) => ({
    getProducts: builders.query({
      query: () => "products"
    }),
    deleteProducts: builders.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE"
      })
    }),
    editProducts: builders.mutation({
      query: (body) => ({
        url: `products/${body.id}`,
        method: "PUT",
        body,
      })
    }),
    addProducts: builders.mutation({
      query: (body) => ({
        url: "products",
        method:"POST",
        body,
      })
    })
  }),
})


export const {useGetProductsQuery, useDeleteProductsMutation, useEditProductsMutation, useAddProductsMutation} = productsApi