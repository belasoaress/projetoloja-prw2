import React, { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import Radio from '../Radio/Radio';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [marca, setMarca] = useState('Dell');
  const [secao, setSecao] = useState('Computadores');
  const [condicao, setCondicao] = useState('novo');

  const aoSalvar = (evento) => {
    evento.preventDefault();

    props.aoProdCadastrado({
      nome: nome,
      preco: preco,
      marca: marca,
      secao: secao,
      condicao: condicao,
    });
    setNome('');
    setPreco('');
    setMarca('Dell');
    setCondicao('novo');
    setSecao('Computadores');
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do produto:</h2>
        <ListaSuspensa
          label="Marcas"
          itens={props.marcas}
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />
        <ListaSuspensa
          label="Seção"
          itens={props.secao}
          valor={secao}
          aoAlterado={(valor) => setSecao(valor)}
        />
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Preço"
          placeholder="Digite seu preço"
          valor={preco}
          aoAlterado={(valor) => setPreco(valor)}
        />
        <div className="radios">
          <Radio
            nome="condicao"
            valor="novo"
            label="Novo"
            valorAtual={condicao}
            aoAlterado={(valor) => setCondicao(valor)}
          />
          <Radio
            nome="condicao"
            valor="usado"
            label="Usado"
            valorAtual={condicao}
            aoAlterado={(valor) => setCondicao(valor)}
          />
        </div>
        <Botao>Cadastrar Produto</Botao>
      </form>
    </section>
  );
};
export default Formulario;
