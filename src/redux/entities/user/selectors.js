export const selectUserModule = (state) => state.user;

export const selectUserById = (state, id) => (id ? selectUserModule(state).entities[id] : null);

export const selectUserIds = (state) => selectUserModule(state).ids;
