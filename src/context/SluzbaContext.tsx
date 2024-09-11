import React, { useState } from "react";
import ispiti from "../data/ispiti.json";

type SluzbaContextType = {
  prijaviIspit: (id: number) => void;
  odjaviIspit: (id: number) => void;
  prijavljeniIspiti: typeof ispiti;
  neprijavljeniIspiti: typeof ispiti;
};

export const SluzbaContext = React.createContext<SluzbaContextType | null>(
  null
);

const SluzbaProvider = ({ children }: { children: React.ReactNode }) => {
  const [prijavljeniIspiti, setPrijavljeniIspiti] = useState<typeof ispiti>([]);
  const [neprijavljeniIspiti, setNeprijavljeniIspiti] =
    useState<typeof ispiti>(ispiti);

  const prijaviIspit = (id: number) => {
    const ispit = ispiti.find((i) => i.id === id);

    if (!ispit) return;

    setPrijavljeniIspiti((prev) => [...prev, ispit]);
    setNeprijavljeniIspiti((prev) => prev.filter((i) => i.id !== id));
  };

  const odjaviIspit = (id: number) => {
    const ispit = ispiti.find((i) => i.id === id);

    if (!ispit) return;

    setPrijavljeniIspiti((prev) => prev.filter((i) => i.id !== id));
    setNeprijavljeniIspiti((prev) => [...prev, ispit]);
  };

  return (
    <SluzbaContext.Provider
      value={{
        prijaviIspit,
        odjaviIspit,
        prijavljeniIspiti,
        neprijavljeniIspiti,
      }}
    >
      {children}
    </SluzbaContext.Provider>
  );
};

export default SluzbaProvider;
