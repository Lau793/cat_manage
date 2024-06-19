import React, { useState } from 'react';
import { FaCat, FaRegTimesCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import LoginModal from '../loginmodal/LoginModal'; // Importación correcta

import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className='navbar'>
      <div className='container'>
        <h1><span><FaCat />Cat CareManager</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><button className="link-button" onClick={() => { window.location.href = '#'; }}>Inicio</button></li>
          <li><button className="link-button" onClick={() => { window.location.href = '#'; }}>Buscar</button></li>
          <li><button className="link-button" onClick={() => { window.location.href = '#'; }}>Acerca</button></li>
          <li><button className="link-button" onClick={() => { window.location.href = '#'; }}>Contacto</button></li>
        </ul>
        <button onClick={handleOpenModal} className='btn'>Iniciar Sesión</button>
        <div className='hamburger' onClick={handleClick}>
          {click ? <FaRegTimesCircle className='icon' /> : <HiOutlineMenuAlt4 className='icon' />}
        </div>
      </div>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
