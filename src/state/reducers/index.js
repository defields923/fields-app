import { combineReducers } from 'redux';
import { count } from './countReducers';
import dogs from './dogsReducers';

export default combineReducers({ count, dogs });
