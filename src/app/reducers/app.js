import { combineReducers } from 'redux-immutable';

import github from './github/github';

const app = combineReducers({
	github
});

export default app;