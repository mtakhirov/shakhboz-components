export type Item = Record<string, any>;

export type Header = {
  text: string;
  value: string;
  sortable?: boolean;
  fixed?: boolean;
  width?: number;
};
