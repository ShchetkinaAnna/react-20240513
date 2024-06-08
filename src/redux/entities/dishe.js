import { createSlice } from '@reduxjs/toolkit';

import { normalizedDishes } from '../../constants/normalized-mock';

export const DisheSlice = createSlice({
  name: 'dishe',
  initialState: {
    entities: normalizedDishes.reduce((acc, dishe) => {
      acc[dishe.id] = dishe;
      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
});
