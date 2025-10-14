import React, { useState } from "react";
import users from "../data/users.json";
import { User, UserEditRequest } from "../models/Auth";

type AuthContextType = {
  user: User | null;
  login: (brojIndeksa: string) => void;
  logout: () => void;
  editUser: (request: UserEditRequest) => void;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (brojIndeksa: string) => {
    const newUser = users.find(
      (user) => user.brojIndeksa.toLowerCase() === brojIndeksa.toLowerCase()
    );

    if (newUser) {
      setUser(newUser);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const editUser = (request: UserEditRequest) => {
    if (!user) return;

    const updatedUser: User = {
      brojIndeksa: user?.brojIndeksa!,
      ime: request.ime,
      prezime: request.prezime,
      adresaStanovanja: user?.adresaStanovanja!,
      adresaPrebivanja: request.adresaPrebivanja,
      jmbg: user?.jmbg!,
      datumRodjenja: user?.datumRodjenja!,
      godinaStudija: user?.godinaStudija!,
      kantonRegija: request.kantonRegija,
      mjesto: request.mjesto,
      opcinaGrad: request.opcinaGrad,
      drzava: request.drzava,
      nacionalnost: request.nacionalnost,
      brojTelefona: request.brojTelefona,
    };

    const userIndex = users.findIndex(
      (u) => u.brojIndeksa === user.brojIndeksa
    );

    if (userIndex === 1) return;

    users[userIndex] = updatedUser;
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, editUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
