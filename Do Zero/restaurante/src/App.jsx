import React from "react";
import "./App.css";
import ImgRestaurante from "./assets/logo.jpg";
import Categorias from "./components/Categorias";
import { Cards } from "./components/Cards";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="container">
      <Banner />
      <Categorias />
      <Cards />
    </div>
  );
}

export default App;
