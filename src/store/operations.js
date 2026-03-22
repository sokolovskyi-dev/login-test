const { createAsyncThunk } = require('@reduxjs/toolkit');

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (body, { rejectWithValue }) => {
    try {
        const data = await
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
