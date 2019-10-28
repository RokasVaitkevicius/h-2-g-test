export interface SelectBoxProps {
  options: Array<SelectBoxItem>;
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  value: Array<SelectBoxItem>;
  label: string;
}

export interface SelectBoxItem {
  name: string;
  [key: string]: any;
}
