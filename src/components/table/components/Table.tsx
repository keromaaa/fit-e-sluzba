import React from "react";
import { TableProps } from "../TableModels";
import TableHeader from "./TableHeader";
import TableHeaderGroup from "./TableHeaderGroup";
import TableBody from "./TableBody";
import TableData from "./TableData";
import Input from "../../ui/components/Input";
import TableRow from "./TableRow";
import Button from "../../ui/components/Button";

const Table: React.FC<TableProps> = ({ config }) => {
  const keys: string[] = config.tableHeaders.map((header) => header.key);

  const buttonHeaders =
    config.dataButtons?.length! > config.inputButtons?.length!
      ? config.dataButtons
      : config.inputButtons;

  return (
    <table className="border border-hidden overflow-hidden border-primary rounded-md table">
      <TableHeaderGroup>
        {config.tableHeaders.map((header, index) => (
          <TableHeader
            key={`header-${index}`}
            displayName={header.displayName}
            className={header.className}
          />
        ))}
        {buttonHeaders?.length &&
          buttonHeaders.map((_, index) => (
            <TableHeader key={`header-button-${index}`} />
          ))}
      </TableHeaderGroup>
      {config.tableData.length || config.inputRow ? (
        <TableBody>
          {config.tableData.map((item, index) => (
            <TableData
              key={index}
              data={item}
              buttons={config.dataButtons}
              keys={keys}
            />
          ))}
          {config.inputRow && (
            <TableRow>
              {config.tableHeaders.map((header, index) => (
                <td
                  key={`table-input-${index}`}
                  className="border-2 border-white px-2 py-1"
                >
                  <Input
                    type={`table-${header.type}`}
                    placeholder={header.displayName + "..."}
                  />
                </td>
              ))}
              {config.inputButtons?.length &&
                config.inputButtons.map((button, index) => (
                  <td
                    key={`table-input-button-${index}`}
                    className="border-2 border-white px-2 py-1"
                  >
                    <Button
                      type="accent"
                      text={button.text}
                      className="mx-auto block"
                    />
                  </td>
                ))}
            </TableRow>
          )}
        </TableBody>
      ) : null}
    </table>
  );
};

export default Table;
