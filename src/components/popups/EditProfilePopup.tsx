import { useForm } from "react-hook-form";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserEditRequest } from "../../models/Auth";

interface EditProfilePopupProps {
  onClose: () => void;
}

const EditProfilePopup: React.FC<EditProfilePopupProps> = ({ onClose }) => {
  const auth = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserEditRequest>();

  const onSubmit = (data: UserEditRequest) => {
    auth?.editUser(data);
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
        defaultValue={auth?.user?.ime}
        className={errors.ime ? "border-red-400" : ""}
      />
      <Input
        {...register("prezime", { required: true })}
        type="text"
        labelText="Prezime:"
        defaultValue={auth?.user?.prezime}
        className={errors.prezime ? "border-red-400" : ""}
      />
      <Input
        {...register("adresaPrebivanja", { required: true })}
        type="text"
        labelText="Adresa prebivanja:"
        defaultValue={auth?.user?.adresaPrebivanja}
        className={errors.adresaPrebivanja ? "border-red-400" : ""}
      />
      <Input
        {...register("kantonRegija", { required: true })}
        type="text"
        labelText="Kanton/regija:"
        defaultValue={auth?.user?.kantonRegija}
        className={errors.kantonRegija ? "border-red-400" : ""}
      />
      <Input
        {...register("mjesto", { required: true })}
        type="text"
        labelText="Mjesto:"
        defaultValue={auth?.user?.mjesto}
        className={errors.mjesto ? "border-red-400" : ""}
      />
      <Input
        {...register("opcinaGrad", { required: true })}
        type="text"
        labelText="Općina/grad:"
        defaultValue={auth?.user?.opcinaGrad}
        className={errors.opcinaGrad ? "border-red-400" : ""}
      />
      <Input
        {...register("drzava", { required: true })}
        type="text"
        labelText="Država:"
        defaultValue={auth?.user?.drzava}
        className={errors.drzava ? "border-red-400" : ""}
      />
      <Input
        {...register("nacionalnost", { required: true })}
        type="text"
        labelText="Nacionalnost:"
        defaultValue={auth?.user?.nacionalnost}
        className={errors.nacionalnost ? "border-red-400" : ""}
      />
      <Input
        {...register("brojTelefona", { required: true })}
        type="text"
        labelText="Broj telefona:"
        defaultValue={auth?.user?.brojTelefona}
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
