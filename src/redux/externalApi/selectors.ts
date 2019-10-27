import { AppState } from '../../types';

export const selectApiStatus = (state: AppState) => state.externalApi.status;
export const selectApiEndpoint = (state: AppState) =>
  state.externalApi.endpoint;
export const selectApiData = (state: AppState) => state.externalApi.data;
export const selectCheckedApiDataCount = (state: AppState) =>
  state.externalApi.data.filter(ad => ad.isChecked).length;
