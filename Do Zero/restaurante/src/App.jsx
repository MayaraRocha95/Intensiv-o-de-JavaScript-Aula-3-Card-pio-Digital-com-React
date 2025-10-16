import "./App.css";
import React, { useState } from "react";
import Categorias from "./components/Categorias";
import { Cards } from "./components/Cards";
import Banner from "./components/Banner";

function App() {
    const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  return (
    <div className="container">
      <Banner />
      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      />
      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </div>
  );
}

export default App;
