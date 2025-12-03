import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import featureFlagsReducer from './slices/featureFlagsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    featureFlags: featureFlagsReducer,
  },
});

export default store;
