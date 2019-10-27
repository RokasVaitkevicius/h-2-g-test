import axios from 'axios';
import { setApiStatus } from '../redux/externalApi/actions';
import { APIStatus, ActionTypes } from '../types';

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== ActionTypes.API) return;

  const { url, method, data, onSuccess, onFailure, headers } = action.payload;
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  dispatch(setApiStatus(APIStatus.LOADING));

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
      dispatch(setApiStatus(APIStatus.DONE));
    })
    .catch(error => {
      dispatch(setApiStatus(APIStatus.ERROR));
      dispatch(onFailure(error));
    });
};

export default apiMiddleware;
