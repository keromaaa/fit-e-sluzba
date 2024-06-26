import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Pocetna from './pages/Pocetna'
import MojiPodaci from './pages/MojiPodaci'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/pocetna' element={<Pocetna />}></Route>
        <Route path='/mojiPodaci' element={<MojiPodaci />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
