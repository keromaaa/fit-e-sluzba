import { useForm } from "react-hook-form";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";

interface EditProfilePopupProps {
  onClose: () => void;
}

interface FormValues {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  brojIndeksa: string;
  adresaStanovanja: string;
  adresaPrebivanja: string;
  godinaStudija: number;
  jmbg: number;
  kantonRegija: string;
  mjesto: string;
  opcinaGrad: string;
  drzava: string;
  nacionalnost: string;
  brojTelefona: string;
}

const EditProfilePopup: React.FC<EditProfilePopupProps> = ({ onClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[480px] flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold ">Uredi profil</h2>
      <Input
        {...register("ime", { required: true })}
        type="text"
        labelText="Ime:"
        defaultValue="Ime"
        className={errors.ime ? "border-red-400" : ""}
      />
      <Input
        {...register("prezime", { required: true })}
        type="text"
        labelText="Prezime:"
        defaultValue="Prezime"
        className={errors.prezime ? "border-red-400" : ""}
      />
      <Input
        {...register("adresaPrebivanja", { required: true })}
        type="text"
        labelText="Adresa prebivanja:"
        defaultValue="Sjeverni logor BB"
        className={errors.adresaPrebivanja ? "border-red-400" : ""}
      />
      <Input
        {...register("kantonRegija", { required: true })}
        type="text"
        labelText="Kanton/regija:"
        defaultValue="HNK"
        className={errors.kantonRegija ? "border-red-400" : ""}
      />
      <Input
        {...register("mjesto", { required: true })}
        type="text"
        labelText="Mjesto:"
        defaultValue="Mostar"
        className={errors.mjesto ? "border-red-400" : ""}
      />
      <Input
        {...register("opcinaGrad", { required: true })}
        type="text"
        labelText="Općina/grad:"
        defaultValue="Mostar"
        className={errors.opcinaGrad ? "border-red-400" : ""}
      />
      <Input
        {...register("drzava", { required: true })}
        type="text"
        labelText="Država:"
        defaultValue="Bosna i Hercegovina"
        className={errors.drzava ? "border-red-400" : ""}
      />
      <Input
        {...register("nacionalnost", { required: true })}
        type="text"
        labelText="Nacionalnost:"
        defaultValue="Bošnjak"
        className={errors.nacionalnost ? "border-red-400" : ""}
      />
      <Input
        {...register("brojTelefona", { required: true })}
        type="text"
        labelText="Broj telefona:"
        defaultValue="+387612345678"
        className={errors.brojTelefona ? "border-red-400" : ""}
      />
      {errors.root && (
        <p className="text-red-400">Obavezno unijeti sva polja.</p>
      )}
      <Button type="submit" text="Spasi promjene" />
    </form>
  );
};

export default EditProfilePopup;
