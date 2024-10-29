import React, { useState } from 'react';

const MostrarOcultar = () => {
  // Inicializa o estado visivel como false
  const [visivel, setVisivel] = useState(false);

  // Função para alternar a visibilidade
  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div>
      <button onClick={alternarVisibilidade}>
        {visivel ? 'Ocultar' : 'Mostrar'} Texto
      </button>
      {visivel && <p>ACHOU!!</p>}
    </div>
  );
};

export default MostrarOcultar;