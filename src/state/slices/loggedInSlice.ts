import { createSlice } from '@reduxjs/toolkit';

const loggedInSlice = createSlice({
	name: 'loggedIn',
	initialState: false,
	reducers: {
		logIn: () => true,
		logOut: () => false,
	},
});

export const { logIn, logOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
