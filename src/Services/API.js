import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
   tagTypes: ["product"], // on definit les tags
   reducerPath: 'productAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: () => `products`,
         providesTags: ["product"] // On set le tag pour Articles
      }),
   }),
})

export const { useGetProductsQuery, useGetCommentsQuery } = productAPI