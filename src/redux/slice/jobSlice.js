import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
	name: 'job',
	initialState: {
		jobList: [],
	},
	reducers: {
		setjobListDetails: (state, action) => {
			state.jobList = action.payload;
		},
	},
});

export const { setjobListDetails } = jobSlice.actions;

export default jobSlice.reducer;
