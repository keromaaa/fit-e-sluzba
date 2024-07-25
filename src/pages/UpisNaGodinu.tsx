import DefaultLayout from "../layouts/DefaultLayout";
import PageTitle from "../components/PageTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/ui/components/Input";
import Button from "../components/ui/components/Button";

interface FormInput {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  adresaStanovanja: string;
  adresaPrebivanja: string;
}

const UpisNaGodinu = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <DefaultLayout>
      <PageTitle text="Upiši godinu" />
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <Input
            labelText="Ime:"
            type="text"
            {...register("ime", { required: true })}
          />
          <Input
            labelText="Prezime:"
            type="text"
            {...register("prezime", { required: true })}
          />
        </div>
        <Input
          labelText="Datum rođenja:"
          type="date"
          {...register("datumRodjenja", { required: true })}
        />
        <Input
          labelText="Adresa stanovanja:"
          type="text"
          {...register("adresaStanovanja", { required: true })}
        />
        <Input
          labelText="Adresa prebivanja:"
          type="text"
          {...register("adresaPrebivanja", { required: true })}
        />
        <Button type="submit" text="Upiši godinu" className="mt-2" />
      </form>
    </DefaultLayout>
  );
};

export default UpisNaGodinu;
