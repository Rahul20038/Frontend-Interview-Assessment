import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './reducers/jobReducer';

export default configureStore({
  reducer: {
    job: jobReducer,
  },
});
