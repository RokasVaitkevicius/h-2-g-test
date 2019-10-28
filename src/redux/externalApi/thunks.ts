import { Dispatch } from 'redux';
import { setApiEndpoint, setApiStatus, setApiData } from './actions';
import { APIStatus, AppState } from '../../types';
import { apiAction } from '../utils';
import { selectApiEndpoint } from './selectors';

const changeApi = (endpoint: string) => (dispatch: Dispatch) => {
  dispatch(setApiEndpoint(endpoint));
  dispatch(setApiStatus(APIStatus.IDLE));
  dispatch(setApiData([]));
};

const fetchAndSetApiData = () => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const apiEndpoint = selectApiEndpoint(getState());
  dispatch(
    apiAction({
      url: apiEndpoint,
      onSuccess: (data: Array<object>) => setApiData(data),
      onFailure: () => console.log('Error occured loading posts'),
    })
  );
};

export { changeApi, fetchAndSetApiData };
