export interface DataDisplayProps {
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
}

export interface IndicatorProps {
  apiStatus: APIStatus;
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
  [x: string]: any;
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

export interface AppState {
  externalApi: ExternalApiState;
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
