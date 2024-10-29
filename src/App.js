import React, { useState } from 'react';
import './App.css';

const MostrarOcultar = () => {
  const [visivel, setVisivel] = useState(false);

  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div className={`container ${visivel ? 'visivel' : 'oculto'}`}>
      <button onClick={alternarVisibilidade}>
        {visivel ? 'Ocultar' : 'Mostrar'} Texto
      </button>
      {visivel && <p>ACHOU!!</p>}
    </div>
  );
};

export default MostrarOcultar;