export interface DataComponentProps {
  data: string;
  onButtonClick: () => void;
  apiStatus: APIStatus;
}

export interface ApiChoice {
  label: string;
  value: string;
}

export interface RadioBoxProps {
  data: Array<ApiChoice>;
  onChange: () => void;
  label?: string;
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
