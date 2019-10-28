import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../types';
import {
  selectApiData,
  selectCheckedApiDataCount,
} from '../../redux/externalApi/selectors';
import { setApiDataIsChecked } from '../../redux/externalApi/actions';
import CheckboxList from '../../components/CheckboxList';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: (id: number) => dispatch(setApiDataIsChecked(id)),
});

const mapStateToProps = (state: AppState) => ({
  data: selectApiData(state),
  header: `Apis count checked: ${selectCheckedApiDataCount(state)}`,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxList);
