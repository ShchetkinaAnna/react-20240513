import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_ENDPOINT } from '../../../constants/endpoints';

export const apiService = createApi({
  reducerPath: 'api',
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
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetMenuByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} = apiService;
