import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Cuida a tu gato</h1>
        <p className='search-text'>Asegúrese de que estén felices y saludables.</p>
        <form className='search'>
          <div>
            <input type='text' placeholder='Búsqueda de razas de gatos, consejos de salud....' />
          </div>
          <div className='radio'>
            <input type='radio' id='adopt' name='option' checked />
            <label htmlFor='adoptar'>Adopt</label>
            <input type='radio' id='Comprar' name='option' />
            <label htmlFor='Comprar'>Foster</label>
            <button type='submit'><AiOutlineSearch className='icon' /></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;

