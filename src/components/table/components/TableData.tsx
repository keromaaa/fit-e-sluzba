import React from "react";
import Button from "../../ui/components/Button";
import { TableDataProps } from "../TableModels";

const TableData: React.FC<TableDataProps> = ({ data, buttons, keys }) => {
  return (
    <tr className="odd:bg-gray-100 even:bg-gray-200">
      {keys?.map((key, index) => (
        <td key={index} className="border-2 border-white p-1">
          {data[key]}
        </td>
      ))}
      {buttons?.length &&
        buttons?.map((button, index) => (
          <td key={`button-${index}`} className="border-2 border-white">
            <Button text={button.text} type="text" className="mx-auto block" />
          </td>
        ))}
    </tr>
  );
};

export default TableData;
