import React from "react";
import Card from "./Card";
import imgBurguer from "../assets/pratos/burguer-picanha.jpeg";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";

export const Cards = () => {

const itensCategoria = [ pratosPrincipais, sobremesas, bebidas ];
const pratos = itensCategoria[0];
  return (
    <div className="cards">

      {pratos.map((prato) => (
        <Card
          key={prato.id}
          titulo={prato.nome}
          descricao={prato.descricao}
          preco={prato.preco}
          imagem={prato.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
