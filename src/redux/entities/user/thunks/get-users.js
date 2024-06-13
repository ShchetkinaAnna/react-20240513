import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_ENDPOINT } from '../../../../constants/endpoints';
import { selectUserIds } from '../selectors';

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async () => {
    const response = await fetch(`${BASE_ENDPOINT}/users`);
    return response.json();
  },
  {
    condition: ({ forceRefetch = false } = {}, { getState }) =>
      forceRefetch || !selectUserIds(getState())?.length,
  },
);
