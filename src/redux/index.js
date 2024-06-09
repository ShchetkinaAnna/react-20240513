import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { DishSlice } from './entities/dish';
import { RestaurantSlice } from './entities/restaurant';
import { ReviewSlice } from './entities/review';
import { UserSlice } from './entities/user';
import { CartSlice } from './ui/cart';

export const store = configureStore({
  reducer: combineSlices(UserSlice, ReviewSlice, RestaurantSlice, DishSlice, CartSlice),
});
