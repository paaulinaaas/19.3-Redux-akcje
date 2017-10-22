import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users';

const app = combineReducers({
	comments,
	users
});
