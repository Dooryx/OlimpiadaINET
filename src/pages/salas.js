import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Salas() {
  const [salaColors, setSalaColors] = useState(['', '', '']);

  useEffect(() => {
    const alarmInterval = setInterval(() => {
      const randomSalaIndex = Math.floor(Math.random() * 3);
      const updatedColors = salaColors.map((color, index) =>
        index === randomSalaIndex ? 'red' : color
      );
      setSalaColors(updatedColors);

      setTimeout(() => {
        const resetColors = salaColors.map(() => '');
        setSalaColors(resetColors);
      }, 3000);
    }, 5000);

    return () => clearInterval(alarmInterval);
  }, [salaColors]);

  return (
    <div>
      <h2>Salas</h2>
      <div className="button-container">
        <Link to="" className={`square-button ${salaColors[0]}`}>Sala 1</Link>
        <Link to="" className={`square-button ${salaColors[1]}`}>Sala 2</Link>
        <Link to="" className={`square-button ${salaColors[2]}`}>Sala 3</Link>
      </div>
    </div>
  );
}

export default Salas;
