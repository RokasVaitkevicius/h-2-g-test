import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../types';
import { selectApiEndpoint } from '../../redux/externalApi/selectors';
import { fetchAndSetApiData } from '../../redux/externalApi/thunks';
import Button from '../../components/Button';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // @ts-ignore
  onClick: () => dispatch(fetchAndSetApiData()),
});

const mapStateToProps = (state: AppState) => ({
  disabled: !selectApiEndpoint(state),
  buttonText: 'Pull Data',
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
