import React from "react";
import { TableHeaderProps } from "../TableModels";

const TableHeader: React.FC<TableHeaderProps> = ({
  displayName,
  className,
}) => {
  return (
    <th className={`p-2 border-2 border-white text-nowrap ${className}`}>
      {displayName}
    </th>
  );
};

export default TableHeader;
