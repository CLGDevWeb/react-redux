import counterReducer from '../reducers/counter';
import loggedReducer from '../reducers/isLooged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
});

export default allReducers;