import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.goit.global',

    // токен из Redux state добавить  в Authorization headers
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

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
    logOut: build.mutation({
      query() {
        return {
          url: `/users/logout`,
          method: 'POST',
        };
      },
    }),

    refreshUser: build.query({ query: () => `users/current` }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useLogOutMutation, useRefreshUserQuery } =
  authApi;
