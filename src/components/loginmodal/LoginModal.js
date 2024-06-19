import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);
        onClose(); // Cierra el modal después de enviar
        navigate('/blank'); // Redirige a la nueva página en blanco
    };

    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'white', padding: 20, borderRadius: 5 }}>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit">Iniciar Sesión</button>
                    <button type="button" onClick={onClose}>Cerrar</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
