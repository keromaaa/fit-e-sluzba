import React from "react";
import { TableRowProps } from "../TableModels";

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return (
    <tr className="even:bg-gray-200 odd:bg-gray-100 border-2 border-white">
      {children}
    </tr>
  );
};

export default TableRow;
