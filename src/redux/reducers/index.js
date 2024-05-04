import { combineReducers } from 'redux';

import jobSlice from '../slice/jobSlice';

const rootReducer = combineReducers({
	job: jobSlice,
});

export default rootReducer;
