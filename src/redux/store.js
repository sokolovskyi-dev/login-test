import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { authApi } from '@/api/authApi';

// import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  //persist:
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware);
  },
});

export const persistor = persistStore(store);
