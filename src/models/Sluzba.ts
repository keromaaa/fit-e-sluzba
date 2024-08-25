export interface Potvrda {
  id: number;
  vrsta: string;
  svrha: string;
  datumSlanja: string;
  status: string;
}

export interface PotvrdaCreateRequest {
  vrsta: string;
  svrha: string;
}

export interface OvjeraSemestraCreateRequest {
  nazivPredmeta: string;
  profesor: string;
  ects: number;
  slikaUplatnice: File;
}

export interface UpisNaGodinuRequest {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  adresaStanovanja: string;
  adresaPrebivanja: string;
}
