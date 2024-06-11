export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, id) => (id ? selectDishModule(state).entities[id] : null);

export const selectDishIds = (state) => selectDishModule(state).ids;
