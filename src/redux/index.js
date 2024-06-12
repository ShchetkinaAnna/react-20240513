import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { DishSlice } from './entities/dish';
import { RestaurantSlice } from './entities/restaurant';
import { ReviewSlice } from './entities/review';
import { UserSlice } from './entities/user';
import { apiService } from './service/api';
import { CartSlice } from './ui/cart';
import { RequestSlice } from './ui/request';

export const store = configureStore({
  reducer: combineSlices(
    UserSlice,
    ReviewSlice,
    RestaurantSlice,
    DishSlice,
    CartSlice,
    RequestSlice,
    apiService,
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
  devTools: import.meta.env.DEV,
});
