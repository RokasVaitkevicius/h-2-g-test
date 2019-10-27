import { AppState } from '../../types';

export const selectSelectedComponent = (state: AppState) =>
  state.renderComponents.selected;
export const selectRenderableComponents = (state: AppState) =>
  state.renderComponents.renderable;
