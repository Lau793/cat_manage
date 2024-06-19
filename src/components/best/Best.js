import React from 'react'

import Apt1 from '../../assets/gatos/3.png'
import Apt2 from '../../assets/gatos/2.png'
import Apt3 from '../../assets/gatos/gato6.png'

import './Best.css'

const Best = () => {
    return(
        <div className='best'>
        <h1>Encuentra toda la información de gatos</h1>
        <div>
          <p><span className='bold'>Todo</span></p>
          <p>Salud</p>
          <p>Nutrición</p>
          <p>Adopción</p>
        </div>
        <div className='container'>
          <img src={Apt1} alt='' />
          <img src={Apt2} alt='' />
          <img src={Apt3} alt='' />
        </div>
        <button className='btn'>Ver todo</button>
      </div>      
    )
}

export default Best 