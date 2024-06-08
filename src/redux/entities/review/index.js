import { createSlice } from '@reduxjs/toolkit';

import { normalizedReviews } from '../../../constants/normalized-mock';

export const ReviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: normalizedReviews.reduce((entities, review) => {
      entities[review.id] = review;
      return entities;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
});
