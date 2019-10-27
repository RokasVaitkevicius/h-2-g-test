import { setApiEndpoint, setApiStatus, setApiData } from './actions';
import { APIStatus } from '../../types';
import { apiAction } from '../utils';

const changeApi = endpoint => dispatch => {
  dispatch(setApiEndpoint(endpoint));
  dispatch(setApiStatus(APIStatus.IDLE));
  dispatch(setApiData(null));
};

const fetchAndSetApiData = (url: string) => {
  return apiAction({
    url,
    onSuccess: (data: Array<object>) => {
      const randomObj = data[Math.floor(Math.random() * data.length)];
      return setApiData(randomObj);
    },
    onFailure: () => console.log('Error occured loading posts'),
  });
};

export { changeApi, fetchAndSetApiData };
