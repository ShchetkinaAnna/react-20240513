import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_ENDPOINT } from '../../../../constants/endpoints';
import { selectRestaurantDishIds } from '../../restaurant/selectors';
import { selectDishIds } from '../selectors';

export const getDishesByRestaurantId = createAsyncThunk(
  'dish/getDishesByRestaurantId',
  async ({ restaurantId }) => {
    const response = await fetch(`${BASE_ENDPOINT}/dishes?restaurantId=${restaurantId}`);
    return response.json();
  },
  {
    condition: ({ forceRefetch = false, restaurantId } = {}, { getState }) => {
      if (forceRefetch) {
        return true;
      }

      const state = getState();
      const loadedDishIds = selectDishIds(state);
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);

      return restaurantDishIds.some((id) => !loadedDishIds.includes(id));
    },
  },
);
