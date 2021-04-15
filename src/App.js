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
    price: '450',
    img: {plant1}
  },
  {
    name: 'Marques delitalis bius',
    description: 'Great for enviroments',
    price: '500',
    img: {plant2}
  },
  {
    name: 'Instalius floripalius floripondius',
    description: 'Great for enviroments',
    price: '320',
    img: {plant3}
  }
]

function App() {
  return (
    <div>
      <Topbar />
      <HeroSlider
        tittle="Tu tienda de plantas"
        subtittle="Venimos a mejorar tu experiencia con el mundo de las plantas.
    Ofrecemos todo tipo de variedades para que encuentres
    la que mejor se adapte a vos."
        img={slide} />

      <PlantsListContainer
        greeting="Hola, soy un greeting"
        tittle="Tendencias esta semana"
        plants={plants} />

      <PlantsListContainer
        tittle="Novedades"
        plants={plants} />

      <Footer />
    </div>
  );
}

export default App;

