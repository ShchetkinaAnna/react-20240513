export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, id) => (id ? selectReviewModule(state).entities[id] : null);

export const selectReviewIds = (state) => selectReviewModule(state).ids;
