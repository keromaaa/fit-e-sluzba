import React from "react";
import Button from "../../ui/components/Button";
import { TableDataProps } from "../TableModels";
import TableRow from "./TableRow";

const TableData: React.FC<TableDataProps> = ({ data, buttons, keys }) => {
  return (
    <TableRow>
      {keys?.map((key, index) => (
        <td key={index} className="border-2 border-white px-2 py-1">
          {data[key]}
        </td>
      ))}
      {buttons?.length &&
        buttons?.map((button, index) => (
          <td
            key={`button-${index}`}
            className="border-2 border-white px-2 py-1"
          >
            <Button
              text={button.text}
              type="text"
              className={`mx-auto block ${button.className}`}
            />
          </td>
        ))}
    </TableRow>
  );
};

export default TableData;
