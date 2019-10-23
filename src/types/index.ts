export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface DataComponentProps {
  data: string;
  onButtonClick: () => void;
  header: string;
  apiStatus: APIStatus;
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
