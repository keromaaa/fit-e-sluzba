import { ReactNode } from 'react';
import { ButtonProps } from '../ui/Models';

export interface TableProps {
  config: TableConfig;
}

export interface TableRowProps {
  children: ReactNode;
}

export interface TableConfig {
  name: string;
  tableHeaders: TableHeader[];
  tableData: any[];
  dataButtons?: ButtonProps[];
  inputButtons?: ButtonProps[];
  inputRow?: boolean;
}

export interface TableHeader {
  type: string;
  key: string;
  displayName: string;
  className?: string;
}

export interface TableHeaderProps {
  displayName?: string;
  className?: string;
}

export interface TableDataProps {
  data?: any;
  buttons?: ButtonProps[];
  keys?: string[];
}
