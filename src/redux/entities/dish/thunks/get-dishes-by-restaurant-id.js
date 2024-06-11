import { createAsyncThunk } from '@reduxjs/toolkit';

import { selectRestaurantDishIds } from '../../restaurant/selectors';
import { selectDishIds } from '../selectors';

export const getDishesByRestaurantId = createAsyncThunk(
  'dish/getDishesByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const loadedDishIds = selectDishIds(state);
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);

      return restaurantDishIds.some((id) => !loadedDishIds.includes(id));
    },
  },
);
