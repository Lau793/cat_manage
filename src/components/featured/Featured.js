import React from 'react';
import './Featured.css';

import House1 from '../../assets/gatos/pedi1.jpg'
import Bed1 from '../../assets/gatos/pedi2.jpg'
import Bed2 from '../../assets/gatos/pedi3.jpg'
import Kitchen from '../../assets/gatos/pedi4.jpg'
import Bathroom from '../../assets/gatos/pedi5.jpg'

import House2 from '../../assets/gatos/amarillo.jpg'
import Bed3 from '../../assets/gatos/mesti1.jpg'
import Bed4 from '../../assets/gatos/mesti2.jpg'
import Bathroom2 from '../../assets/gatos/mest3.jpeg'
import LivingRoom from '../../assets/gatos/atigrado.jpg'

const Featured = () => {
  return (
      <div className='featured'>
          <h1 className='featured-text'>Gatos Pedigree</h1>
          <p className='featured-text'>Caracteristicas, cuidado, adopción.</p>
          <div className='container'>
              <img className='span-3 image-grid-row-2' src={House1} alt='' />
              <img src={Bed1} alt='' />
              <img src={Bed2} alt='' />
              <img src={Kitchen} alt='' />
              <img src={Bathroom} alt='' />
              <div className='span-3 img-details'>
                  <div className='top'>
                      <h2>Ragdoll, Siames, Birmano</h2>
                      <p>House for Sale</p>
                      <p className='cost'>$3000 MXN</p>
                  </div>
                  <div className='info-grid'>
                      <div>
                          <div className='info'>
                              <p className='bold'>Tamaño promedio:</p><p>30-40cm</p>
                          </div>
                          <div className='info'>
                              <p className='bold'>Peso:</p><p>4-6kg</p>
                          </div>
                      </div>
                      <div>
                          <div className='info'>
                              <p className='bold'>Vida promedio:</p><p>12-15 años</p>
                          </div>
                          <div className='info'>
                              <p className='bold'>Pelaje:</p><p>Fino</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='span-2 right-img-details'>
                  <p>Estos gatos son conocidos por sus rasgos físicos y de comportamiento predecibles, lo que los hace populares en el mundo de las exposiciones de mascotas y gatos. Algunos de los aspectos más apreciados de los gatos de pura raza incluyen su apariencia elegante, personalidades únicas y variedad de colores y patrones de pelaje.
                  </p>
                  <button className='btn'>Mas información</button>
              </div>
          </div>

      {/* Section section */}
      <div className='container'>
              <img className='order-2' src={Bed3} alt='' />
              <img className='order-3' src={Bed4} alt='' />

              <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


              <img className='order-4' src={Bathroom2} alt='' />
              <img className='order-5' src={LivingRoom} alt='' />

              <div className='span-2 right-img-details order-7'>
                  <p>Los gatos mestizos, también conocidos como gatos mestizos o gatos comunes, son aquellos que no pertenecen a una raza concreta. Estos gatos suelen ser el resultado de una cría natural sin control de selección de raza. Se caracterizan por su gran diversidad genética, que puede traducirse en una gran variedad de características físicas y de comportamiento.</p>
                  <button className='btn'>Mas información</button>
              </div>


              <div className='span-3 img-details order-6'>
                  <div className='top'>
                      <h2>Gatos Mestizos</h2>
                      <p>House for Sale</p>
                      <p className='price'>$200 MXN</p>
                  </div>
                  <div className='info-grid'>
                      <div>
                          <div className='info'>
                              <p className='bold'>Tamaño promedio:</p><p>25-35cm</p>
                          </div>
                          <div className='info'>
                              <p className='bold'>Peso:</p><p>4-5kg</p>
                          </div>
                      </div>
                      <div>
                          <div className='info'>
                              <p className='bold'>Vida promedio:</p><p>12-15 años</p>
                          </div>
                          <div className='info'>
                              <p className='bold'>Pelaje:</p><p>medio</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default Featured