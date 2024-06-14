export const selectRestaurantFromResult = (restaurantId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === restaurantId),
});

export const selectUserFromResult = (userId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === userId),
});
