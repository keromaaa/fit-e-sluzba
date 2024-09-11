import { useContext, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import Table from "../components/table/components/Table";
import { TableConfig } from "../components/table/TableModels";
import DefaultLayout from "../layouts/DefaultLayout";
import SluzbaProvider, { SluzbaContext } from "../context/SluzbaContext";

const Ispiti = () => {
  const sluzba = useContext(SluzbaContext);

  useEffect(() => {
    console.log(sluzba?.neprijavljeniIspiti);
    console.log(sluzba?.prijavljeniIspiti);
  }, [sluzba]);

  const neprijavljeniIspitiTblConfig: TableConfig = {
    name: "tblPolozeni",
    tableHeaders: [
      {
        type: "text",
        key: "nazivPredmeta",
        displayName: "Naziv predmeta",
      },
      {
        type: "date",
        key: "vrijemeIspita",
        displayName: "Vrijeme obavljanja ispita",
      },
      {
        type: "text",
        key: "mjestoIspita",
        displayName: "Mjesto obavljanja ispita",
      },
    ],
    dataButtons: [
      {
        text: "Prijavi ispit",
        onClick: () => console.log("event"),
      },
    ],
    tableData: sluzba?.neprijavljeniIspiti ?? [],
  };

  const prijavljeniIspitiTblConfig: TableConfig = {
    name: "tblPolozeni",
    tableHeaders: [
      {
        type: "text",
        key: "nazivPredmeta",
        displayName: "Naziv predmeta",
      },
      {
        type: "date",
        key: "vrijemeIspita",
        displayName: "Vrijeme obavljanja ispita",
      },
      {
        type: "text",
        key: "mjestoIspita",
        displayName: "Mjesto obavljanja ispita",
      },
    ],
    dataButtons: [
      {
        text: "Odjavi ispit",
      },
    ],
    tableData: sluzba?.prijavljeniIspiti ?? [],
  };

  return (
    <DefaultLayout>
      <PageTitle text="Neprijavljeni ispiti" />
      {neprijavljeniIspitiTblConfig.tableData.length ? (
        <Table config={neprijavljeniIspitiTblConfig} />
      ) : (
        <p>Trenutno nemate nijedan ispit za prijaviti...</p>
      )}
      <PageTitle text="Prijavljeni ispiti" />
      {prijavljeniIspitiTblConfig.tableData.length ? (
        <Table config={prijavljeniIspitiTblConfig} />
      ) : (
        <p>Trenutno nemate nijedan prijavljen ispit...</p>
      )}
    </DefaultLayout>
  );
};

export default Ispiti;
