import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topbar } from './components/topbar/topbar';
import { HeroSlider } from './components/heroSlider/heroSlider';
import { PlantsListContainer } from './components/plantsListContainer/plantsListContainer';
import { Footer } from './components/footer/footer';
import slide from "./assets/slide.jpg";



function App() {
  const plantsData = [

    {
      name: 'Adefecius Herbalicus Modernistic lanfibius',
      description: 'Great for enviroments',
      price: 450,
      stock: 5,
      img: 0
    },
    {
      name: 'Marques delitalis bius',
      description: 'Great for enviroments',
      price: 500,
      stock: 9,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 10,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 8,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 1,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 2,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 5,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 4,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 3,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 7,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 2,
      img: 0
    },
    {
      name: 'Instalius floripalius floripondius',
      description: 'Great for enviroments',
      price: 320,
      stock: 0,
      img: 0
    },
  ]

  const [plants, setPlants] = useState('loading')

  const getPlants = (data) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(data)
      }, 3000)
    })
  }

  useEffect(() => {
    getPlants(plantsData).then(result => {
      console.log(result)
      setPlants(result);
    });
  }, [])

  getPlants()



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

