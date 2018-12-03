import { createStore } from 'redux';
import { count } from './reducers/example';

export const store = createStore(count);
