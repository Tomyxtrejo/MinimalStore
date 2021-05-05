import './plantDetailContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { plantsJson } from '../../data'
import { useParams } from "react-router-dom";
import { PlantDetail } from '../../components/plantDetail/plantDetail';

export const PlantDetailContainer = () => {
  const { id } = useParams();
  const getPlant = (id) => {
    const plantData = plantsJson.find((plant) => plant.id === Number(id))
    return plantData
  }

  return (
    <div id="detail">
      <PlantDetail plant={getPlant(id)} />
    </div>
  );
}

