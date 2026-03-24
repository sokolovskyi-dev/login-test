import { createAsyncThunk } from '@reduxjs/toolkit';

import { signUp } from '@/api/auth';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || { message: 'Registration failed' });
    }
  }
);
