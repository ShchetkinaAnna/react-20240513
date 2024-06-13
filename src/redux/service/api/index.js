import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_ENDPOINT } from '../../../constants/endpoints';

export const apiService = createApi({
  reducerPath: 'api',
  tagTypes: ['Review', 'Restaurant'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_ENDPOINT }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: 'restaurants',
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: 'users',
      }),
    }),
    getMenuByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: 'dishes',
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: 'reviews',
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }) => ({ type: 'Review', id }))
          .concat({ type: 'Review', id: 'All' }, { type: 'RestaurantReviews', id: restaurantId }),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: 'POST',
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: 'RestaurantReviews', id: restaurantId },
      ],
    }),
    updateReview: builder.mutation({
      query: ({ review }) => ({
        url: `review/${review.id}`,
        method: 'PATCH',
        body: review,
      }),
      invalidatesTags: (result, _, { review }) => [{ type: 'Review', id: review.id }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetMenuByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = apiService;
