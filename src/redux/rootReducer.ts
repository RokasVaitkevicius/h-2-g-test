import { combineReducers } from 'redux';
import post from './posts/reducers';
import apiStatus from './apiStatus/reducers';

export default combineReducers({ post, apiStatus });
