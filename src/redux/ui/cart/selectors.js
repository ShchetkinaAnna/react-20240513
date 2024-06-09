export const selectCartModule = (state) => state.cart;

export const selectDishCount = (state, id) => selectCartModule(state)[id] || 0;
