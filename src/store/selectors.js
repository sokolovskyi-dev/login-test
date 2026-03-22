export const selectAuth = (state) => Boolean(state.auth.token);
export const selectProfile = (state) => state.auth.profile;
export const selectAuthLoading = (state) => state.auth.isLoading;
