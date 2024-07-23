import DefaultLayout from "../layouts/DefaultLayout";
import DropdownList from "../components/ui/components/DropdownList";
import { DropdownListModel } from "../components/ui/Models";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/ui/components/Button";
import TextArea from "../components/ui/components/TextArea";
import Table from "../components/table/components/Table";
import { TableConfig } from "../components/table/TableModels";
import PageTitle from "../components/PageTitle";

interface FormInput {
  vrstaPotvrde: string;
  svrhaPotvrde: string;
}

const Potvrde = () => {
  const dropdownSource: DropdownListModel[] = [
    { value: "status", name: "Uvjerenje o statusu studenta" },
    {
      value: "ocjene",
      name: "Uvjerenje o položenim ispitima sa prosječnom ocjenom",
    },
  ];

  const potvrdeTblConfig: TableConfig = {
    name: "potvrdeTable",
    tableHeaders: [
      {
        key: "vrsta",
        displayName: "Vrsta potvrde",
      },
      {
        key: "datum",
        displayName: "Datum slanja zahtjeva",
      },
      {
        key: "status",
        displayName: "Status zahtjeva",
      },
    ],
    tableButtons: [
      {
        type: "text",
        text: "Otkaži zahtjev",
      },
    ],
    tableData: [
      {
        vrsta: "Uvjerenje o statusu studenta",
        svrha: "Za ovjeravanje zdravstvene knjižice.",
        datum: "23.7.2024.",
        status: "U obradi",
      },
    ],
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <DefaultLayout>
      <PageTitle text="Kreiraj zahtjev" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <DropdownList
          {...register("vrstaPotvrde")}
          labelText="Vrsta potvrde:"
          source={dropdownSource}
        />
        <TextArea
          {...register("svrhaPotvrde", {
            required: "Obavezno unijeti svrhu potvrde.",
          })}
          labelText="Svrha potvrde:"
          className={errors.svrhaPotvrde ? "border-red-400" : ""}
        />
        <p className="text-red-400">{errors.svrhaPotvrde?.message}</p>
        <Button type="submit" text="Pošalji zahtjev" />
      </form>
      <PageTitle text="Poslani zahtjevi" />
      <Table config={potvrdeTblConfig} />
    </DefaultLayout>
  );
};

export default Potvrde;
