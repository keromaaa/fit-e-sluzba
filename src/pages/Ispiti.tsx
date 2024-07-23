import PageTitle from "../components/PageTitle";
import Table from "../components/table/components/Table";
import { TableConfig } from "../components/table/TableModels";
import DefaultLayout from "../layouts/DefaultLayout";

const Ispiti = () => {
  const neprijavljeniIspitiTblConfig: TableConfig = {
    name: "tblPolozeni",
    tableHeaders: [
      {
        key: "nazivPredmeta",
        displayName: "Naziv predmeta",
      },
      {
        key: "vrijemeIspita",
        displayName: "Vrijeme obavljanja ispita",
      },
      {
        key: "mjestoIspita",
        displayName: "Mjesto obavljanja ispita",
      },
    ],
    tableButtons: [
      {
        text: "Prijavi ispit",
      },
    ],
    tableData: [
      {
        nazivPredmeta: "Razvoj softvera II",
        vrijemeIspita: "Srijeda, 4. septembar 2024.",
        mjestoIspita: "AKS",
      },
      {
        nazivPredmeta: "Računarske mreže",
        vrijemeIspita: "Subota, 7. septembar 2024.",
        mjestoIspita: "AMF 2",
      },
    ],
  };

  const prijavljeniIspitiTblConfig: TableConfig = {
    name: "tblPolozeni",
    tableHeaders: [
      {
        key: "nazivPredmeta",
        displayName: "Naziv predmeta",
      },
      {
        key: "vrijemeIspita",
        displayName: "Vrijeme obavljanja ispita",
      },
      {
        key: "mjestoIspita",
        displayName: "Mjesto obavljanja ispita",
      },
    ],
    tableButtons: [
      {
        text: "Odjavi ispit",
      },
    ],
    tableData: [
      // {
      //   nazivPredmeta: "Razvoj softvera II",
      //   vrijemeIspita: "Srijeda, 4. septembar 2024.",
      //   mjestoIspita: "AKS",
      // },
      // {
      //   nazivPredmeta: "Računarske mreže",
      //   vrijemeIspita: "Subota, 7. septembar 2024.",
      //   mjestoIspita: "AMF 2",
      // },
    ],
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
