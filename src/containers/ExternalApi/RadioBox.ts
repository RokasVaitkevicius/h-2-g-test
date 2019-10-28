import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../types';
import { selectApiEndpoint } from '../../redux/externalApi/selectors';
import { changeApi } from '../../redux/externalApi/thunks';
import apis from '../../constants/apis';
import RadioBox from '../../components/RadioBox';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    // @ts-ignore
    dispatch(changeApi(e.target.value)),
});

const mapStateToProps = (state: AppState) => ({
  value: selectApiEndpoint(state),
  label: 'Pick an API to call',
  data: apis,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioBox);
