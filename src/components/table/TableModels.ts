import { ButtonProps } from '../ui/UiModels'

export interface TableProps {
  config: TableConfig
}

export interface TableConfig {
  name: string
  tableHeaders: TableHeader[]
  tableData: any[]
  tableButtons: ButtonProps[]
}

export interface TableHeader {
  key: string
  displayName: string
}

export interface TableDataProps {
  data?: any
  buttons?: ButtonProps[]
  keys?: string[]
}
