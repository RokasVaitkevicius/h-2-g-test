import { combineReducers } from 'redux';
import externalApi from './externalApi/reducers';
import renderComponents from './renderComponents/reducers';

export default combineReducers({ externalApi, renderComponents });
