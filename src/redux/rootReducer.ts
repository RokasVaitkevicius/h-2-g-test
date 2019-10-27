import { combineReducers } from 'redux';
import api from './apiData/reducers';
import colors from './colors/reducers';

export default combineReducers({ api, colors });
