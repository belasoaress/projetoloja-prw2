import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Area from './components/Area/Area';

function App() {
  const marcas = ['Dell', 'HP', 'Positivo', 'Asus', 'Acer'];
  const secao = [
    {
      nome: 'Computadores',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Acessórios',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff',
    },
    {
      nome: 'Impressoras',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2',
    },
    {
      nome: 'Games',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'Gadgets',
      corPrimaria: '#e0d869',
      corSecundaria: '#edeebe',
    },
  ];

  const listaSecao = secao.map((secao) => secao.nome);

  const [produtos, setProdutos] = useState([]);

  const adicionaProd = (prod) => {
    const listaNova = produtos.slice();
    listaNova.push(prod);
    setProdutos(listaNova);
  };

  return (
    <div>
      <Banner />
      <Formulario
        marcas={marcas}
        secao={listaSecao}
        aoProdCadastrado={(prod) => adicionaProd(prod)}
      />
      {secao.map((secao) => (
        <Area
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={produtos.filter((prod) => prod.secao === secao.nome)}
        />
      ))}
    </div>
  );
}

export default App;
