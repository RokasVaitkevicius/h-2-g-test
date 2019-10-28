export interface GenericListItem {
  id: number;
  isChecked: boolean;
  [key: string]: any;
}

export interface CheckboxListProps {
  data: Array<GenericListItem>;
  onClick: (id: number) => void;
  header: string;
}
