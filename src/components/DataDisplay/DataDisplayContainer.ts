import { connect } from 'react-redux';
import DataDisplayComponent from './DataDisplay';
import {
  selectApiStatus,
  selectApiEndpoint,
  selectApiData,
} from '../../redux/apiStatus/selectors';
import { changeApi, fetchAndSetApiData } from '../../redux/apiStatus/thunks';

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
});

const mapStateToProps = state => ({
  data: selectApiData(state),
  apiStatus: selectApiStatus(state),
  apiEndpoint: selectApiEndpoint(state),
  apis,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataDisplayComponent);
