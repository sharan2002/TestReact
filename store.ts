import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './App/reducers/authReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
