import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home'; // Ensure this path is correct
import Admin from './Component/Admin/Admin'; // Ensure this path is correct
import Master from './Component/Master/Master';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      once: true,      // Animation should happen only once per element
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path='/master' element={<Master/>}/>
      </Routes>
    </div>
  );
}

export default App;
