import React from 'react';


const pacientes = [
  { id: 1, nombre: 'Juan Perez', edad: 30, enfermedad: 'Resfriado' },
  { id: 2, nombre: 'María González', edad: 25, enfermedad: 'Dolor de cabeza' },
  { id: 3, nombre: 'Carlos Rodríguez', edad: 40, enfermedad: 'Gripe' },
  // esto se conectaria a la base de dato
];

const TablaPacientes = () => {
  return (
    <div>
      <h1>Tabla de Pacientes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Enfermedad</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map(paciente => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nombre}</td>
              <td>{paciente.edad}</td>
              <td>{paciente.enfermedad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaPacientes;
