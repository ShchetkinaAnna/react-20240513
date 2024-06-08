import { createSlice } from '@reduxjs/toolkit';

import { normalizedDishes } from '../../../constants/normalized-mock';

export const DishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: normalizedDishes.reduce((entities, dish) => {
      entities[dish.id] = dish;
      return entities;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
});
