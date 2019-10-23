import { connect } from 'react-redux';
import { fetchAndSetPost } from '../../redux/posts/thunks';
import DataDisplayComponent from './DataDisplay';
import { selectPost } from '../../redux/posts/selectors';
import { selectApiStatus } from '../../redux/apiStatus/selectors';

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => dispatch(fetchAndSetPost()),
});

const mapStateToProps = state => ({
  data: selectPost(state),
  apiStatus: selectApiStatus(state),
  header: 'Posts',
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataDisplayComponent);
