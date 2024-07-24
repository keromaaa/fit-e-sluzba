import React from "react";
import IconDragDrop from "./icons/IconDragDrop";
import Input from "./ui/components/Input";

interface DragAndDropFieldProps {
  id: string;
  accept?: string;
  className?: string;
  labelText?: string;
}

const DragAndDropField: React.FC<DragAndDropFieldProps> = ({
  id,
  accept,
  className,
  labelText,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {labelText && <label className="font-medium">{labelText}</label>}
      <div
        className={`p-4 border-dashed border-2 border-gray-200 rounded-md bg-gray-100 w-[480px] h-64 flex flex-col gap-2 justify-center items-center ${className}`}
      >
        <IconDragDrop />
        <b>Drag & drop</b>
        <div className="w-full flex justify-between items-center">
          <div className="flex-1 border border-primary " />
          <b className="bg-inherit px-2">ILI</b>
          <div className="flex-1 border border-primary " />
        </div>
        <Input
          id={id}
          placeholder="Pretraži datoteke"
          type="file"
          accept={accept}
        />
      </div>
    </div>
  );
};

export default DragAndDropField;
