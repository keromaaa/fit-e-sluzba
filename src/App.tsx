import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Pocetna from "./pages/Pocetna";
import MojiPodaci from "./pages/MojiPodaci";
import Ispiti from "./pages/Ispiti";
import Potvrde from "./pages/Potvrde";
import OvjeraSemestra from "./pages/OvjeraSemestra";
import UpisNaGodinu from "./pages/UpisNaGodinu";
import AuthProvider from "./context/AuthContext";
import SluzbaProvider from "./context/SluzbaContext";

function App() {
  return (
    <AuthProvider>
      <SluzbaProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/pocetna" element={<Pocetna />}></Route>
            <Route path="/potvrde" element={<Potvrde />}></Route>
            <Route path="/ovjera-semestra" element={<OvjeraSemestra />}></Route>
            <Route path="/ispiti" element={<Ispiti />}></Route>
            <Route path="/upis-na-godinu" element={<UpisNaGodinu />}></Route>
            <Route path="/moji-podaci" element={<MojiPodaci />}></Route>
          </Routes>
        </BrowserRouter>
      </SluzbaProvider>
    </AuthProvider>
  );
}

export default App;
