import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
	name: 'job',
	initialState: {
		jobList: [],
		hasMore: true,
		loading: false,
	},
	reducers: {
		setjobListDetails: (state, action) => {
			state.jobList = action.payload;
		},
		setHasMore: (state, action) => {
			state.hasMore = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const { setjobListDetails, setHasMore, setLoading } = jobSlice.actions;

export default jobSlice.reducer;
