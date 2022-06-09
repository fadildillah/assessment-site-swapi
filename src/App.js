import { Footer } from './components/Footer';
import  {Navbar} from './components/Navbar';
import { Routes, Route } from 'react-router-dom'; 
import Characters from './pages/index';
import Vehicles from './pages/vehicles';
import Planets from './pages/planets';
import CharacterDetails from './pages/characterDetails';
import VehicleDetails from './pages/vehicleDetails';
import PlanetDetails from './pages/planetDetails';

function App() {
  return (
    <>
      <Navbar />
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
