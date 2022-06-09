import { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import  { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom'; 
import Characters from './pages/index';
import Vehicles from './pages/vehicles';
import Planets from './pages/planets';
import CharacterDetails from './pages/characterDetails';
import VehicleDetails from './pages/vehicleDetails';
import PlanetDetails from './pages/planetDetails';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path='/' exact element={<Characters/>} />
        <Route path='/vehicle' element={<Vehicles/>} />
        <Route path='/planet' element={<Planets/>} />
        <Route path='/character/:id' element={<CharacterDetails/>} />
        <Route path='/vehicle/:id' element={<VehicleDetails/>} />
        <Route path='/planet/:id' element={<PlanetDetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
