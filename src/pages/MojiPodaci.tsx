import ProfilePicture from "../components/ProfilePicture";
import ProfileLayout from "../layouts/ProfileLayout";
import ProfileInfo from "../components/ProfileInfo";
import Button from "../components/ui/components/Button";
import Modal from "../components/modal/Modal";
import { useContext, useState } from "react";
import EditProfilePopup from "../components/popups/EditProfilePopup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const MojiPodaci = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [editProfileOpen, setEditProfileOpen] = useState(false);

  const handleLogout = () => {
    auth?.logout();
    navigate("/login");
  };

  return (
    <ProfileLayout>
      <aside className="flex flex-col items-center gap-4 w-1/4 border-2 rounded-md border-gray-300 bg-gray-100 p-4">
        <ProfilePicture className="w-full h-auto" />
        <Button
          type="text"
          text="Uredi profil"
          onClick={() => setEditProfileOpen(true)}
        />
        <div className="border-b-2 border-b-gray-300 w-full rounded-full" />
        <Button
          type="text"
          text="Odjavi se"
          className="text-red-400 hover:text-red-300"
          onClick={() => handleLogout()}
        />
      </aside>
      <section className="flex-1 grid grid-cols-2">
        <ProfileInfo label="Ime" value={auth?.user?.ime!} />
        <ProfileInfo label="JMBG" value={auth?.user?.jmbg.toString()!} />
        <ProfileInfo label="Prezime" value={auth?.user?.prezime!} />
        <ProfileInfo label="Kanton/regija" value={auth?.user?.kantonRegija!} />
        <ProfileInfo label="Datum rođenja" value={auth?.user?.datumRodjenja!} />
        <ProfileInfo label="Mjesto" value={auth?.user?.mjesto!} />
        <ProfileInfo label="Broj indeksa" value={auth?.user?.brojIndeksa!} />
        <ProfileInfo label="Općina/grad" value={auth?.user?.opcinaGrad!} />
        <ProfileInfo
          label="Adresa stanovanja"
          value={auth?.user?.adresaStanovanja!}
        />
        <ProfileInfo label="Država" value={auth?.user?.drzava!} />
        <ProfileInfo
          label="Adresa prebivanja"
          value={auth?.user?.adresaPrebivanja!}
        />
        <ProfileInfo label="Nacionalnost" value={auth?.user?.nacionalnost!} />
        <ProfileInfo
          label="Godina studija"
          value={auth?.user?.godinaStudija.toString()!}
        />
        <ProfileInfo label="Broj telefona" value={auth?.user?.brojTelefona!} />
      </section>
      <Modal isOpen={editProfileOpen} onClose={() => setEditProfileOpen(false)}>
        <EditProfilePopup onClose={() => setEditProfileOpen(false)} />
      </Modal>
    </ProfileLayout>
  );
};

export default MojiPodaci;
