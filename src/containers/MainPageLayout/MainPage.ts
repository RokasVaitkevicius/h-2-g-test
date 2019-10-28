import { connect } from 'react-redux';
import { AppState } from '../../types';
import MainPage from '../../components/MainPage';
import { selectRenderableComponents } from '../../redux/renderComponents/selectors';

const mapStateToProps = (state: AppState) => ({
  label: 'Main page',
  renderableComponents: selectRenderableComponents(state),
});

export default connect(
  mapStateToProps,
  null
)(MainPage);
