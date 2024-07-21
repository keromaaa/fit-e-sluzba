import ProfilePicture from "../components/ProfilePicture";
import ProfileLayout from "../layouts/ProfileLayout";
import ProfileInfo from "../components/ProfileInfo";
import Button from "../components/ui/components/Button";

const MojiPodaci = () => {
  return (
    <ProfileLayout>
      <aside className="flex flex-col items-center gap-4 w-1/4 border-2 rounded-md border-gray-300 bg-gray-100 p-4">
        <ProfilePicture className="w-full h-auto" />
        <Button type="text" text="Uredi profil" />
        <div className="border-b-2 border-b-gray-300 w-full rounded-full" />
        <Button
          type="text"
          text="Odjavi se"
          className="text-red-400 hover:text-red-300"
        />
      </aside>
      <section className="flex-1 grid grid-cols-2">
        <ProfileInfo label="Ime" value="Ime" />
        <ProfileInfo label="JMBG" value="1234567890123456" />
        <ProfileInfo label="Prezime" value="Prezime" />
        <ProfileInfo label="Kanton/regija" value="HNK" />
        <ProfileInfo label="Datum rođenja" value="1.1.2000." />
        <ProfileInfo label="Mjesto" value="Mostar" />
        <ProfileInfo label="Broj indeksa" value="IB210000" />
        <ProfileInfo label="Općina/grad" value="Mostar" />
        <ProfileInfo label="Adresa stanovanja" value="Sjeverni logor bb" />
        <ProfileInfo label="Država" value="Bosna i Hercegovina" />
        <ProfileInfo label="Adresa prebivanja" value="Sjeverni logor bb" />
        <ProfileInfo label="Nacionalnost" value="Bošnjak" />
        <ProfileInfo label="Godina studija" value="3" />
        <ProfileInfo label="Broj telefona" value="+387612345678" />
      </section>
    </ProfileLayout>
  );
};

export default MojiPodaci;
