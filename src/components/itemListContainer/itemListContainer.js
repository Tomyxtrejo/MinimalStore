import { Container } from 'react-bootstrap';
import '../../App.css';
import './itemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemList } from '../itemList/itemList';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { plantsJson } from '../../data'
export const ItemListContainer = ({ tittle, greeting, anchor }) => {

  const { category } = useParams();
  const [plants, setPlants] = useState('loading')

  const getPlants = (data) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(data)
      }, 1000)
    })
  }

  useEffect(() => {
    setPlants('loading')
    getPlants(plantsJson).then(result => {
      if (category){
        const filtered = result.filter(plant => plant.category === category);
        if (filtered.length) {
          setPlants(filtered);
        }else{
          setPlants('empty')
        }
      }else{
        setPlants(result);
      }
    });
    getPlants()
  }, [category])


  return (
    <Container className={anchor ? 'section' : 'section category'} id={anchor ? anchor : category}>
      <h4 className="tittleH1 mt-5 plantPrimary">{greeting ? greeting : 'Categoria'}</h4>
      <h1 className="tittleH1 mb-4">
        {tittle ? tittle : category}
      </h1>
      <ItemList
        plants={plants}
      />
    </Container>
  )
}