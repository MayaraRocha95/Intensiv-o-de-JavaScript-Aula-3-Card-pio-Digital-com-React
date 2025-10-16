import React from "react";
import Card from "./Card";
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";

export const Cards = ({ numCategoriaSelecionada }) => {

const itensCategoria = [ pratosPrincipais, sobremesas, bebidas ];
const categoriaSelecionada = itensCategoria[numCategoriaSelecionada];
  return (
    <div className="cards">

      {categoriaSelecionada.map((item) => (
        <Card
          key={item.id}
          titulo={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          imagem={item.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
