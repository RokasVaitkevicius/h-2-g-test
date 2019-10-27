export interface DataComponentProps {
  data: string;
  onButtonClick: () => void;
  apiStatus: APIStatus;
}

export interface IndicatorProps {
  apiStatus: APIStatus;
}

export interface DataCheckboxListProps {
  data: Array<any>;
  onClick: (id: string) => void;
  header: string;
}

export interface DataButtonProps {
  disabled: boolean;
  onClick: () => void;
  buttonText: string;
}

export interface ApiChoice {
  label: string;
  value: string;
}

export interface RadioBoxProps {
  data: Array<ApiChoice>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
