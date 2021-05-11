import './itemDetailContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { plantsJson } from '../../data'
import { useParams } from "react-router-dom";
import { ItemDetail } from '../../components/itemDetail/itemDetail';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const getPlant = (id) => {
    const plantData = plantsJson.find((plant) => plant.id === Number(id))
    return plantData
  }

  return (
    <div id="detail">
      <ItemDetail plant={getPlant(id)} />
    </div>
  );
}

