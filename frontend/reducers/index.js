import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootRecucer = combineReducers({
  user,
  post
});

export default rootRecucer;
