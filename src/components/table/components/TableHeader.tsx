import React from 'react'

interface TableHeaderProps {
  displayName?: string
}

const TableHeader: React.FC<TableHeaderProps> = ({ displayName }) => {
  return <th className='p-2 border-2 border-white'>{displayName}</th>
}

export default TableHeader
