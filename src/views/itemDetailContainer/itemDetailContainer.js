import './itemDetailContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { ItemDetail } from '../../components/itemDetail/itemDetail';
import { getFirestore } from '../../firebase'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext'



export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [plantSelected, setPlantSelected] = useState('loading')
  const { isInCart } = useContext(CartContext)
  useEffect(() => {
    if (id) {
      const db = getFirestore()
      const ItemCollection = db.collection('items').doc(id)
      ItemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.exists === false) {
            setPlantSelected('empty')
          } else {
            const data = {...querySnapshot.data(), id}
            setPlantSelected(data)
          }
        }
        )
    }

  }, [id])

  return (
    <div id="detail">
      <ItemDetail plant={plantSelected} inCart={isInCart(id)} />
    </div>
  );
}

