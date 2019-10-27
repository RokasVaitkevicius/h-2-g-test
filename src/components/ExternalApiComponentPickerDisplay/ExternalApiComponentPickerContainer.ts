import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState, RenderableComponent } from 'types';
import ExternalApiDataDisplay from './ExternalApiComponentPickerDisplay';
import {
  selectApiStatus,
  selectApiEndpoint,
  selectApiData,
  selectCheckedApiDataCount,
} from '../../redux/externalApi/selectors';
import { changeApi, fetchAndSetApiData } from '../../redux/externalApi/thunks';
import { setApiDataIsChecked } from '../../redux/externalApi/actions';
import {
  selectSelectedComponent,
  selectRenderableComponents,
} from '../../redux/renderComponents/selectors';
import {
  setSelectedComponent,
  addRenderableComponent,
} from '../../redux/renderComponents/actions';

const apis = [
  {
    label: 'API 1',
    value: 'https://jsonplaceholder.typicode.com/posts',
  },
  {
    label: 'API 2',
    value: 'https://jsonplaceholder.typicode.com/users',
  },
  {
    label: 'API 3 - broken on purpose',
    value: 'https://jsonplaceholder.typicode.com/uerss',
  },
];

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onButtonClick: (url: string) => dispatch(fetchAndSetApiData(url)),
  // @ts-ignore
  onChangeApi: (url: string) => dispatch(changeApi(url)),
  onApiDataClick: (id: number) => dispatch(setApiDataIsChecked(id)),
  onSelectedComponentChange: (component: RenderableComponent) =>
    dispatch(setSelectedComponent(component)),
  addRenderableComponent: (component: RenderableComponent) =>
    dispatch(addRenderableComponent(component)),
});

const mapStateToProps = (state: AppState) => ({
  apiData: selectApiData(state),
  apiStatus: selectApiStatus(state),
  apiEndpoint: selectApiEndpoint(state),
  selectedComponent: selectSelectedComponent(state),
  renderableComponents: selectRenderableComponents(state),
  apiDataHeader: `Apis count checked: ${selectCheckedApiDataCount(state)}`,
  buttonText: 'Pull Data',
  radioLabel: 'Pick an API to call',
  apis,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExternalApiDataDisplay);
