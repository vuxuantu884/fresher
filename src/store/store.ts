import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user';
import localeReducer from './reducers/locale';

const store = configureStore({
  reducer: {
    user: userReducer,
    locale: localeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;