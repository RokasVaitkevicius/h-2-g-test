import { SET_SELECTED_COMPONENT, ADD_RENDERABLE_COMPONENT } from './constants';
import { RenderableComponent } from '../../types';

export const addRenderableComponent = (component: RenderableComponent) => ({
  type: ADD_RENDERABLE_COMPONENT,
  payload: component,
});

export const setSelectedComponent = (component: RenderableComponent) => ({
  type: SET_SELECTED_COMPONENT,
  payload: component,
});
