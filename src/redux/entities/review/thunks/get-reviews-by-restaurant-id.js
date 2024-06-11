import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_ENDPOINT } from '../../../../constants/endpoints';
import { selectRestaurantReviewIds } from '../../restaurant/selectors';
import { selectReviewIds } from '../selectors';

export const getReviewsByRestaurantId = createAsyncThunk(
  'review/getReviewsByRestaurantId',
  async ({ restaurantId }) => {
    const response = await fetch(`${BASE_ENDPOINT}/reviews?restaurantId=${restaurantId}`);
    return response.json();
  },
  {
    condition: ({ forceRefetch = false, restaurantId } = {}, { getState }) => {
      if (forceRefetch) {
        return true;
      }

      const state = getState();
      const loadedReviewIds = selectReviewIds(state);
      const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);

      return restaurantReviewIds.some((id) => !loadedReviewIds.includes(id));
    },
  },
);
