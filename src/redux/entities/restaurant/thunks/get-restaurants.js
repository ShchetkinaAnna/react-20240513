import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_ENDPOINT } from '../../../../constants/endpoints';
import { selectRestaurantIds } from '../selectors';

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  async () => {
    const response = await fetch(`${BASE_ENDPOINT}/restaurants`);
    return response.json();
  },
  {
    condition: ({ forceRefetch = false } = {}, { getState }) =>
      forceRefetch || !selectRestaurantIds(getState())?.length,
  },
);
