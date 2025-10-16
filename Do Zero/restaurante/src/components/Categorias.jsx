import React, { useState } from "react";

const Categorias = ({ numCategoriaSelecionada, setNumCategoriaSelecionada }) => {

  return (
    <div className="categorias">
      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 0 ? " categoria--selecionada" : "")
        }
        onClick={() => setNumCategoriaSelecionada(0)}
      >
        Main Courses
      </p>

      <p  className={
          "categoria" +
          (numCategoriaSelecionada === 1 ? " categoria--selecionada" : "")
        } onClick={() => setNumCategoriaSelecionada(1)}>
        Desserts
      </p>

      <p  className={
          "categoria" +
          (numCategoriaSelecionada === 2 ? " categoria--selecionada" : "")
        } onClick={() => setNumCategoriaSelecionada(2)}>
        Drinks
      </p>
    </div>
  );
};

export default Categorias;
