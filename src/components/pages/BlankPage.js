import React from 'react';
import gatoImage from '../../assets/gatos/celeste.png';
import './BlankPage.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const BlankPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-header">Bienvenida Laura</h1>
      <div className="patient-info">
        <h2>Paciente Gatuno: Celeste</h2>
        <img src={gatoImage} alt="Gata Celeste" className="patient-photo" />
        <p className="patient-description">
          Celeste es una gata muy especial con una personalidad única. Le encanta jugar y es muy curiosa.
          Siempre está atenta a todo lo que sucede a su alrededor y es una excelente compañera.
          <br /><br />
          Datos Veterinarios de Celeste:
          <br /><br />
          Edad: 4 meses
          <br />
          Peso: 2.5 kg
          <br />
          Vacunación: Triple Felina (1ra dosis): Protege contra el rinotraqueitis, calicivirus y panleucopenia felina. Fecha de administración: 01/03/2024. Rabia: Fecha de administración: 15/03/2024.
          <br />
          Desparasitación: Interna: Administrada con Milbemax, cubriendo tanto nematodos como cestodos. Fecha de administración: 20/03/2024. Externa: Uso de pipeta antipulgas y garrapatas de la marca Frontline. Fecha de administración: 20/03/2024.
          <br />
          Chequeo General: Estado general de salud: Excelente. Condición corporal: Óptima, con un pelaje brillante y sin signos de deshidratación. Examen de heces: Negativo para parásitos internos.
          <br />
          Alimentación: Dieta basada en croquetas de alta calidad para gatitos (marca Royal Canin Kitten). Cantidad diaria recomendada: 50-70 gramos divididos en 3 comidas al día.
          <br />
          Observaciones: Celeste muestra un comportamiento activo y curioso, acorde a su edad. Se recomienda continuar con la vacunación de refuerzo según el calendario veterinario.
        </p>
      </div>
    </div>
  );
};

export default BlankPage;
