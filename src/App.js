import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topbar } from './components/topbar/topbar';
import { HeroSlider } from './components/heroSlider/heroSlider';
import { PlantsListContainer } from './components/plantsListContainer/plantsListContainer';
import { Footer } from './components/footer/footer';
import slide from "./assets/slide.jpg";
import plant1  from "./assets/plants/plant4_2.png";
import plant2  from "./assets/plants/plant5_2.png";
import plant3  from "./assets/plants/plant6_2.png";

const plants = [
  {
    name: 'Adefecius Herbalicus Modernistic lanfibius',
    description: 'Great for enviroments',
    price: 450,
    stock: 5,
    img: {plant1}
  },
  {
    name: 'Marques delitalis bius',
    description: 'Great for enviroments',
    price: 500,
    stock: 9,
    img: {plant2}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 10,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 8,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 1,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 2,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 5,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 4,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 3,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 7,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 2,
    img: {plant3}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: 320,
    stock: 0,
    img: {plant3}
  },
]

function App() {
  return (
    <div id="home">
      <Topbar />
      <HeroSlider
        tittle="Tu tienda de plantas"
        subtittle="Venimos a mejorar tu experiencia con el mundo de las plantas.
    Ofrecemos todo tipo de variedades para que encuentres
    la que mejor se adapte a vos."
        img={slide} />

      <PlantsListContainer
        greeting="No te las pierdas!"
        tittle="Tendencias esta semana"
        anchor="trends"
        plants={plants} />

      <PlantsListContainer
        tittle="Novedades"
        anchor="new"
        plants={plants} />

      <Footer />
    </div>
  );
}

export default App;

