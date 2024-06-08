import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { DisheSlice } from './entities/dishe';
import { RestaurantSlice } from './entities/restaurant';
import { ReviewSlice } from './entities/review';
import { UserSlice } from './entities/user';

export const store = configureStore({
  reducer: combineSlices(UserSlice, ReviewSlice, RestaurantSlice, DisheSlice),
});
