import { createSlice } from '@reduxjs/toolkit';

const cartTypeSlice = createSlice({
	name: 'cartType',
	initialState: 'Food',
	reducers: {
		setCartType: (state, action) => action.payload,
	},
});

export const { setCartType } = cartTypeSlice.actions;
export default cartTypeSlice.reducer;
