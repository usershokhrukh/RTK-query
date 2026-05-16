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
  }),
})

export const {useGetProductsQuery} = productsApi