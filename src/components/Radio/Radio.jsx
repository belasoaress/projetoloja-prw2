import React from 'react';
import './Radio.css';

const Radio = (props) => {
  const aoSelecionar = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="radio">
      <label>
        <input
          type="radio"
          name={props.nome}
          value={props.valor}
          checked={props.valorAtual === props.valor}
          onChange={(e) => props.aoAlterado(e.target.value)}
        />
        {props.label}
      </label>
    </div>
  );
};

export default Radio;
