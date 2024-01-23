import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
   tagTypes: ["comments"], // on definit les tags
   reducerPath: 'productAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: () => `products`,
         method: "GET",
      }),
      getComments: builder.query({
         query: (id) => `products/${id}/comments`,
         method: "GET",
         providesTags: ["comments"] // On set le tag pour Articles
      }),
      createComment: builder.mutation({
         query: (id, username, comment) => ({
           url: `products/${id}/comments`,
           method: "POST",
           body: JSON.stringify({ id, username, comment }),
         }),
         invalidatesTags: ["comments"] // On invalide le tag
       })
   }),
})

export const { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation } = productAPI