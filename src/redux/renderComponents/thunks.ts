import { Dispatch } from 'redux';
import { addRenderableComponent } from './actions';
import { AppState } from '../../types';
import { selectSelectedComponent } from './selectors';

const addSelectedComponent = () => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const component = selectSelectedComponent(getState());
  dispatch(addRenderableComponent(component));
};

export { addSelectedComponent };
