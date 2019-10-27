import { combineReducers } from 'redux';
import { SET_SELECTED_COMPONENT, ADD_RENDERABLE_COMPONENT } from './constants';
import { set, addItemToArray } from '../utils';
import { Action, RenderableComponent } from '../../types';

const defaultSelectedComponentState = { name: '' };
const defaultRenderableComponentsState: Array<RenderableComponent> = [];

const selected = (state = defaultSelectedComponentState, action: Action) => {
  switch (action.type) {
    case SET_SELECTED_COMPONENT:
      return set(state, action);
    default:
      return state;
  }
};

const renderable = (
  state = defaultRenderableComponentsState,
  action: Action
) => {
  switch (action.type) {
    case ADD_RENDERABLE_COMPONENT:
      return addItemToArray(state, action);
    default:
      return state;
  }
};

export default combineReducers({
  selected,
  renderable,
});
