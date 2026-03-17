import React from 'react';
import './Area.css';
import Produto from '../Produto/Produto';

const Area = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  return props.produtos.length > 0 ? (
    <section className="area" style={corDeFundo}>
      <h3 style={corSublinhado}>{props.nome}</h3>
      <div className="produtos">
        {props.produtos.map((prod) => (
          <Produto
            key={prod.nome}
            nome={prod.nome}
            marca={prod.marca}
            condicao={prod.condicao}
            preco={prod.preco}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  );
};

export default Area;
