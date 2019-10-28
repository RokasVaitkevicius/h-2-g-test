import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from 'types';
import { selectSelectedComponent } from '../../redux/renderComponents/selectors';
import { setSelectedComponent } from '../../redux/renderComponents/actions';
import SelectBox from '../../components/SelectBox';

import Button from '../ExternalApi/Button';
import CheckboxList from '../ExternalApi/CheckboxList';
import ApiStatusIndicator from '../ExternalApi/ApiStatusIndicator';
import RadioBox from '../ExternalApi/RadioBox';

const options = [
  {
    name: 'RadioBox',
    component: RadioBox,
  },
  {
    name: 'Button',
    component: Button,
  },
  {
    name: 'Indicator',
    component: ApiStatusIndicator,
  },
  {
    name: 'DataList',
    component: CheckboxList,
  },
];

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChange: (e: React.ChangeEvent<{ value: unknown }>) =>
    dispatch(
      // @ts-ignore
      setSelectedComponent(options.find(c => c.name === e.target.value))
    ),
});

const mapStateToProps = (state: AppState) => ({
  label: 'Select a component',
  value: [selectSelectedComponent(state).name],
  options,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectBox);
