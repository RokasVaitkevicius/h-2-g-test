import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from 'types';
import { selectSelectedComponent } from '../../redux/renderComponents/selectors';
import { addSelectedComponent } from '../../redux/renderComponents/thunks';
import Button from '../../components/Button';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // @ts-ignore
  onClick: () => dispatch(addSelectedComponent()),
});

const mapStateToProps = (state: AppState) => ({
  buttonText: 'Append Component',
  disabled: !selectSelectedComponent(state).component,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
