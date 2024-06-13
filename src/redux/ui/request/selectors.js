import { REQUEST_STATUS } from './constants';

export const selectRequestModule = (state) => state.request;

export const selectRequestById = (state, requestId) =>
  requestId ? selectRequestModule(state)[requestId] : null;

export const selectRequestStatus = (state, requestId) =>
  selectRequestById(state, requestId)?.status || REQUEST_STATUS.idle;

export const selectRequestError = (state, requestId) => selectRequestById(state, requestId)?.error;
