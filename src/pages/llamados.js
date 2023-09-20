import React from 'react';


const pacientes = [
  { id: 1, sala: 1, motivo: 'Descompensacion', ultimavez: '16:00' },
  { id: 2, sala: 3, motivo: 'Descompensacion', ultimavez: '19:46' },
  { id: 3, sala: 2, motivo: 'Ir al baño', ultimavez: '03:56' },
  // esto se conectaria a la base de dato
];

const TablaLlamados = () => {
  return (
    <div>
      <h1>Tabla de Llamados</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sala</th>
            <th>Motivo de la Emergencia</th>
            <th>La ultima vez hace</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map(paciente => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.sala}</td>
              <td>{paciente.motivo}</td>
              <td>{paciente.ultimavez}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaLlamados;
