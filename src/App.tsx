import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Pocetna from "./pages/Pocetna";
import MojiPodaci from "./pages/MojiPodaci";
import Ispiti from "./pages/Ispiti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/pocetna" element={<Pocetna />}></Route>
        <Route path="/moji-podaci" element={<MojiPodaci />}></Route>
        <Route path="/ispiti" element={<Ispiti />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
