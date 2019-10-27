export interface ExternalApiCompPickerDisplayProps {
  apiData: Array<GenericItem>;
  onButtonClick: (url: string) => void;
  apiStatus: APIStatus;
  apis: Array<RadioData>;
  onChangeApi: (url: string) => void;
  apiEndpoint: string;
  apiDataHeader: string;
  onApiDataClick: (id: number) => void;
  buttonText: string;
  radioLabel: string;
  selectedComponent: RenderableComponent;
  renderableComponents: Array<RenderableComponent>;
  onSelectedComponentChange: (value: RenderableComponent | undefined) => void;
  addRenderableComponent: (component: RenderableComponent) => void;
}

export interface RenderableComponent {
  name: string;
  component: (props: ExternalApiCompPickerDisplayProps) => JSX.Element;
}

export interface IndicatorProps {
  apiStatus: APIStatus;
}

export interface SelectBoxProps {
  options: Array<SelectBoxItem>;
  handleChange: (event: any) => void;
  value: Array<string>;
}

export interface SelectBoxItem {
  name: string;
  [key: string]: any;
}

export interface DataCheckboxListProps {
  data: Array<GenericItem>;
  onClick: (id: number) => void;
  header: string;
}

export interface Action {
  type: string;
  payload: object;
}

export interface GenericItem {
  id: number;
  isChecked: boolean;
  [key: string]: any;
}

export interface DataButtonProps {
  disabled: boolean;
  onClick: () => void;
  buttonText: string;
}

export interface RadioBoxProps {
  data: Array<RadioData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: string;
}

export interface ExternalApiState {
  status: APIStatus;
  endpoint: string;
  data: Array<GenericItem>;
}

export interface RenderComponentsState {
  selected: RenderableComponent;
  renderable: Array<RenderableComponent>;
}

export interface AppState {
  externalApi: ExternalApiState;
  renderComponents: RenderComponentsState;
}

export interface RadioData {
  label: string;
  value: string;
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
