import React, { ReactNode } from "react";

interface TableHeaderGroupProps {
  children: ReactNode;
}

const TableHeaderGroup: React.FC<TableHeaderGroupProps> = ({ children }) => {
  return (
    <thead className="bg-gray-200 rounded-t-md border-2 border-white">
      <tr className="table-row rounded-t-md border-2 border-white">
        {children}
      </tr>
    </thead>
  );
};

export default TableHeaderGroup;
