export interface User {
  brojIndeksa: string;
  ime: string;
  prezime: string;
  datumRodjenja: string;
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
  password: string;
  slika: File;
}

export interface LoginRequest {
  brojIndeksa: string;
  password: string;
}
