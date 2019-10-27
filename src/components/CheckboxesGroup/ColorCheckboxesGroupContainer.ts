import { connect } from 'react-redux';
import SelectWithCheckbox from './index';
import {
  selectColors,
  selectAmountOfColorsChecked,
} from '../../redux/colors/selectors';
import { setIsColorChecked } from '../../redux/colors/actions';

const mapStateToProps = state => ({
  data: selectColors(state),
  dataSelectedCount: selectAmountOfColorsChecked(state),
  header: 'Colors picked:',
});

const mapDispatchToProps = dispatch => ({
  onChange: id => dispatch(setIsColorChecked(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectWithCheckbox);
