import { ComponentClass } from 'react';
import { GenericListItem } from '../components/CheckboxList/types';

export interface RenderableComponent {
  name: string;
  component?: ComponentClass<{}, any>;
}

export interface Action {
  type: string;
  payload: object;
}
export interface ExternalApiState {
  status: APIStatus;
  endpoint: string;
  data: Array<GenericListItem>;
}

export interface RenderComponentsState {
  selected: ComponentClass<{}, any>;
  renderable: Array<ComponentClass<{}, any>>;
}

export interface AppState {
  externalApi: ExternalApiState;
  renderComponents: RenderComponentsState;
}

export enum APIStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  DONE = 'DONE',
  ERROR = 'ERROR',
}

export enum ActionTypes {
  API = 'API',
}
