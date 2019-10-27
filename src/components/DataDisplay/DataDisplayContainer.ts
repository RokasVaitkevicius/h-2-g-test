import { connect } from 'react-redux';
import DataDisplayComponent from './DataDisplay';
import {
  selectApiStatus,
  selectApiEndpoint,
  selectApiData,
  selectCheckedApiDataCount,
} from '../../redux/apiData/selectors';
import { changeApi, fetchAndSetApiData } from '../../redux/apiData/thunks';
import { setApiDataIsChecked } from '../../redux/apiData/actions';

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

const mapDispatchToProps = dispatch => ({
  onButtonClick: url => dispatch(fetchAndSetApiData(url)),
  onChangeApi: url => dispatch(changeApi(url)),
  onApiDataClick: id => dispatch(setApiDataIsChecked(id)),
});

const mapStateToProps = state => ({
  data: selectApiData(state),
  apiStatus: selectApiStatus(state),
  apiEndpoint: selectApiEndpoint(state),
  listHeader: `Apis count checked: ${selectCheckedApiDataCount(state)}`,
  apis,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataDisplayComponent);
