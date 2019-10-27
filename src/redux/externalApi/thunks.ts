import { Dispatch } from 'redux';
import { setApiEndpoint, setApiStatus, setApiData } from './actions';
import { APIStatus } from '../../types';
import { apiAction } from '../utils';

const changeApi = (endpoint: string) => (dispatch: Dispatch) => {
  dispatch(setApiEndpoint(endpoint));
  dispatch(setApiStatus(APIStatus.IDLE));
  dispatch(setApiData([]));
};

const fetchAndSetApiData = (url: string) => {
  return apiAction({
    url,
    onSuccess: (data: Array<object>) => {
      return setApiData(data);
    },
    onFailure: () => console.log('Error occured loading posts'),
  });
};

export { changeApi, fetchAndSetApiData };
