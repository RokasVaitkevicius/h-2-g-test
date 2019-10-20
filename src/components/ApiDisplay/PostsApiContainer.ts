import { connect } from 'react-redux';
import { fetchAndSetPostThunk } from '../../redux/posts/thunks';
import ApiDisplayComponent from './ApiDisplay';
import { selectPost } from '../../redux/posts/selectors';

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => dispatch(fetchAndSetPostThunk()),
});

const mapStateToProps = state => ({
  data: selectPost(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiDisplayComponent);
