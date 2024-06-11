export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  id ? selectRestaurantModule(state).entities[id] : null;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectFirstRestaurant = (state) =>
  Object.keys(selectRestaurantModule(state).entities)[0];

export const selectRestaurantDishIds = (state, id) => selectRestaurantById(state, id)?.menu;

export const selectRestaurantReviewIds = (state, id) => selectRestaurantById(state, id)?.reviews;
