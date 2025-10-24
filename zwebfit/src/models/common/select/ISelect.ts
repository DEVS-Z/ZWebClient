export interface CommonSelect2 {
  value: string | number;
  label: string;
}

export interface CustomSelectProps {
  value?: string | number;
  onChange: (value: string | number) => void;
  className?: string;
  placeholder?: string;
  select: CommonSelect2[];
}