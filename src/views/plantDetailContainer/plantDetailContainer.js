import React, { useState, useEffect } from "react";
import './plantDetailContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topbar } from '../../components/topbar/topbar';
import { PlantDetail } from '../../components/plantDetail/plantDetail';
import { Footer } from '../../components/footer/footer';



export const PlantDetailContainer = () => {
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
    getPlants()
  }, [])

  



  return (
    <div id="detail">
      <Topbar />
      <PlantDetail />
      <Footer />
    </div>
  );
}

