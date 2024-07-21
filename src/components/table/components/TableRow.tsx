import React from "react";
import TableData from "./TableData";

interface TableRowProps {
  data: string[];
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <tr className="even:bg-gray-200 odd:bg-gray-100 border-2 border-white">
      {data.map((data, index) => (
        <TableData key={index} value={data} />
      ))}
    </tr>
  );
};

export default TableRow;
