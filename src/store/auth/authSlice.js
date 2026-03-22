import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  profile: null,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export const { logIn, logOut } = userSlice.actions;
