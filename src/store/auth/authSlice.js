import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { registrationThunk } from '../operations';

const initialState = {
  token: '',
  profile: null,
  isLoading: false,
  error: null,
};

function handleRegister(state, { payload }) {
  state.isLoading = false;
  state.token = payload.token;
  state.profile = payload.user;
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.token = '';
      state.profile = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registrationThunk.fulfilled, handleRegister)
      .addCase(registrationThunk.rejected, (state, { payload, error }) => {
        state.isLoading = false;
        state.error = payload || error.message;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, userSlice.reducer);
