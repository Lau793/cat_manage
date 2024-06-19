import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Best from './components/best/Best';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import BlankPage from './components/pages/BlankPage'; // Asegúrate de que esta ruta es correcta

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Best />
            <Featured />
            <Footer />
          </>
        } />
        <Route path="/blank" element={<BlankPage />} /> {/* Ruta para la nueva página en blanco */}
      </Routes>
    </Router>
  );
}

export default App;
