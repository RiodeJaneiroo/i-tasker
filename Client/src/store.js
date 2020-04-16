import { createStore, applyMiddleware } from '../node_modules/redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const logMiddleware = () => (next) => (action) => {
	console.log(action.type);
	return next(action);
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));

export default store;