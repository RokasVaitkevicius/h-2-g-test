export const selectApiStatus = state => state.api.apiStatus;
export const selectApiEndpoint = state => state.api.apiEndpoint;
export const selectApiData = state => state.api.apiData;
export const selectCheckedApiDataCount = state =>
  state.api.apiData.filter(ad => ad.isChecked).length;
