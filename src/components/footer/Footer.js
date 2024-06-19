import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';


import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>Acerca de</h3>
                    <p>Compañia</p>
                    <p>Detalles</p>
                    <p>Planificación</p>
                    <p>Sobre nosotros</p>
                </div>
                <div className='col'>
                    <h3>Compañia</h3>
                    <p>Compañia</p>
                    <p>Detalles</p>
                    <p>Planificación</p>
                    <p>Sobre nosotros</p>
                </div>
                <div className='col'>
                    <h3>Legal</h3>
                    <p>Compañia</p>
                    <p>Detalles</p>
                    <p>Planificación</p>
                    <p>Sobre nosotros</p>
                </div>
                <div className='col'>
                    <h3>Información</h3>
                    <p>Compañia</p>
                    <p>Detalles</p>
                    <p>Planificación</p>
                    <p>Sobre nosotros</p>
                </div>
            </div>
        </div>
    )
}

export default Footer