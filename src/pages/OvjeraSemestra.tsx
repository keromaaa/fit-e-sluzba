import DefaultLayout from "../layouts/DefaultLayout";
import PageTitle from "../components/PageTitle";
import Table from "../components/table/components/Table";
import { TableConfig } from "../components/table/TableModels";
import DragAndDropField from "../components/DragAndDropField";
import Button from "../components/ui/components/Button";

const OvjeraSemestra = () => {
  const predmetiTblConfig: TableConfig = {
    name: "predmeti",
    tableHeaders: [
      { key: "naziv", displayName: "Naziv predmeta", type: "text" },
      {
        key: "profesor",
        displayName: "Zvanje, ime i prezime profesora",
        type: "text",
      },
      { key: "ects", displayName: "ECTS", type: "number", className: "w-28" },
    ],
    tableData: [
      {
        naziv: "Poslovna inteligencija",
        profesor: "prof. dr. Mirela Mabić",
        ects: 5,
      },
    ],
    dataButtons: [
      {
        text: "Ukloni predmet",
        className: "font-semibold hover:text-red-400",
      },
    ],
    inputButtons: [
      {
        type: "text",
        text: "Dodaj predmet",
      },
    ],
    inputRow: true,
  };

  return (
    <DefaultLayout>
      <PageTitle text="Ovjeri semestar" />
      <Table config={predmetiTblConfig} />
      <DragAndDropField
        id="uplatnica"
        accept="image/png, image/jpeg"
        labelText="Slika uplatnice:"
      />
      <Button type="submit" text="Ovjeri semestar" />
    </DefaultLayout>
  );
};

export default OvjeraSemestra;
