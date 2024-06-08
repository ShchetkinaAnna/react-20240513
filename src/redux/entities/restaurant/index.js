import { createSlice } from '@reduxjs/toolkit';

import { normalizedRestaurants } from '../../../constants/normalized-mock';

export const RestaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities: normalizedRestaurants.reduce((entities, restaurant) => {
      entities[restaurant.id] = restaurant;
      return entities;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
});
