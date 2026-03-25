import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.goit.global' }),

  endpoints: (build) => ({
    signUp: build.mutation({
      query(body) {
        return {
          url: `/users/signup`,
          method: 'POST',
          body,
        };
      },
    }),

    signIn: build.mutation({
      query(body) {
        return {
          url: `/users/login`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
