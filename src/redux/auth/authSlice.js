import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { registrationThunk } from '../operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
// function handleRegister(state, { payload }) {
//   state.isLoading = false;
//   state.token = payload.token;
//   state.profile = payload.user;
// }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.token = '';
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(registrationThunk.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(registrationThunk.fulfilled, handleRegister)
  //     .addCase(registrationThunk.rejected, (state, { payload, error }) => {
  //       state.isLoading = false;
  //       state.error = payload || error.message;
  //     });
  // },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
