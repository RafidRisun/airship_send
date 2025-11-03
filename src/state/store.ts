import { configureStore } from '@reduxjs/toolkit';
import cartTypeReducer from './slices/cartTypeSlice';
import loggedInReducer from './slices/loggedInSlice';

export const store = configureStore({
	reducer: {
		loggedIn: loggedInReducer,
		cartType: cartTypeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
