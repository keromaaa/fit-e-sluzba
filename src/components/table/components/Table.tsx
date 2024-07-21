import React from 'react'
import { TableProps } from '../TableModels'
import TableHeader from './TableHeader'
import TableHeaderGroup from './TableHeaderGroup'
import TableBody from './TableBody'
import TableData from './TableData'

const Table: React.FC<TableProps> = ({ config }) => {
  const headers: string[] = config.tableHeaders.map((header) => header.displayName)
  const keys: string[] = config.tableHeaders.map((header) => header.key)

  return (
    <table className='border border-hidden overflow-hidden border-primary rounded-md table'>
      <TableHeaderGroup>
        {headers.map((displayName, index) => (
          <TableHeader key={`header-${index}`} displayName={displayName} />
        ))}
        {config.tableButtons.map((_, index) => (
          <TableHeader key={`button-header-${index}`} />
        ))}
      </TableHeaderGroup>
      {config.tableData.length ? (
        <TableBody>
          {config.tableData.map((item, index) => (
            <TableData key={index} data={item} buttons={config.tableButtons} keys={keys} />
          ))}
        </TableBody>
      ) : null}
    </table>
  )
}

export default Table
