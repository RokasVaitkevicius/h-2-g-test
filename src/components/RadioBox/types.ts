export interface RadioData {
  label: string;
  value: string;
}

export interface RadioBoxProps {
  data: Array<RadioData>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: string;
}
