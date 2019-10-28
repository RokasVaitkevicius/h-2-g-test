import { connect } from 'react-redux';
import { AppState } from '../../types';
import { selectApiStatus } from '../../redux/externalApi/selectors';
import ApiStatusIndicator from '../../components/ApiStatusIndicator';

const mapStateToProps = (state: AppState) => ({
  apiStatus: selectApiStatus(state),
});

export default connect(
  mapStateToProps,
  null
)(ApiStatusIndicator);
