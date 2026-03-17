import React from 'react';
import './Produto.css';

const Produto = (props) => {
  return (
    <div className="prod">
      <div className="cabecalho">
        <img
          src={`/imagens/${props.marca.toLowerCase()}.png`}
          alt={props.marca}
        />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>R$ {props.preco}</h5>
        <h5>{props.condicao === 'novo' ? 'Novo' : 'Usado'}</h5>
      </div>
    </div>
  );
};

export default Produto;
