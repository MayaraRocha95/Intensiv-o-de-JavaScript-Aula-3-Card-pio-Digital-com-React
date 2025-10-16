import enroladinhoMignonImg from "./pratos/enroladinho-mignon.jpeg";
import casal20Img from "./pratos/casal-20.jpeg";
import burguerPicanhaImg from "./pratos/burguer-picanha.jpeg";
import fishChipsImg from "./pratos/fish-chips.jpeg";
import risotoCamaraoTrufadoImg from "./pratos/risoto-camarao-trufado.jpeg";

import brownieImg from "./sobremesas/brownie.jpeg";
import cocadaFornoImg from "./sobremesas/cocada-forno.jpeg";
import petitGateauImg from "./sobremesas/petit-gateau.jpeg";

import aguaSemGasImg from "./bebidas/agua-sem-gas.jpeg";
import aguaComGasImg from "./bebidas/agua-com-gas.jpeg";
import cocaColaImg from "./bebidas/coca-cola.jpeg";
import guaranaImg from "./bebidas/guarana.jpeg";
import heinekenImg from "./bebidas/heineken.jpeg";

const enroladinhoMignon = {
  nome: "Rolled Mignon",
  preco: "R$ 64,90",
  imagem: enroladinhoMignonImg,
  descricao: "Thin slices of filet mignon rolled in parmesan cheese",
};

const casal20 = {
  nome: "Perfect Couple",
  preco: "R$ 29,00",
  imagem: casal20Img,
  descricao: "Perfect couple: homemade garlic bread and grilled Tuscan sausage",
};

const burguerPicanha = {
  nome: "Angus Picanha Burger",
  preco: "R$ 44,90",
  imagem: burguerPicanhaImg,
  descricao:
    "Angus Picanha burger, cheddar cheese, crispy onions, and bacon jam",
};

const fishChips = {
  nome: "Fish and Chips",
  preco: "R$ 79,90",
  imagem: fishChipsImg,
  descricao:
    "Breaded fish strips with panko and corn flakes, served with French fries",
};

const risotoCamaraoTrufado = {
  nome: "Truffled Shrimp Risotto",
  preco: "R$ 72,90",
  imagem: risotoCamaraoTrufadoImg,
  descricao:
    "Arborio rice, shrimp sautéed in truffle oil, and crispy panko",
};

const brownie = {
  nome: "Brownie",
  preco: "R$ 32,90",
  imagem: brownieImg,
  descricao:
    "Delicious homemade brownie, vanilla ice cream, and hot chocolate sauce",
};

const cocadaForno = {
  nome: "Baked Coconut",
  preco: "R$ 32,90",
  imagem: cocadaFornoImg,
  descricao:
    "Creamy toasted coconut dessert, Argentinian dulce de leche, and vanilla ice cream",
};

const petitGateau = {
  nome: "Petit Gateau",
  preco: "R$ 34,90",
  imagem: petitGateauImg,
  descricao:
    "Warm cake filled with chocolate ganache, condensed milk, and cashew nuts",
};

const aguaSemGas = {
  nome: "Still Water",
  preco: "R$ 6,90",
  imagem: aguaSemGasImg,
  descricao: "310ml",
};

const aguaComGas = {
  nome: "Sparkling Water",
  preco: "R$ 7,90",
  imagem: aguaComGasImg,
  descricao: "310ml",
};

const cocaCola = {
  nome: "Coca-Cola",
  preco: "R$ 7,90",
  imagem: cocaColaImg,
  descricao: "290ml",
};

const guarana = {
  nome: "Guaraná Antártica",
  preco: "R$ 7,90",
  imagem: guaranaImg,
  descricao: "350ml",
};

const heineken = {
  nome: "Heineken",
  preco: "R$ 15,90",
  imagem: heinekenImg,
  descricao: "355ml",
};

export const pratosPrincipais = [
  burguerPicanha,
  enroladinhoMignon,
  casal20,
  fishChips,
  risotoCamaraoTrufado,
];

export const sobremesas = [brownie, cocadaForno, petitGateau];

export const bebidas = [aguaSemGas, aguaComGas, cocaCola, guarana, heineken];
