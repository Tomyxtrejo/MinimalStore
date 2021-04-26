import { Row } from 'react-bootstrap';
import '../../App.css';
import './plantsList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardPlant } from '../cardPlant/cardPlant';
import { CardPlantLoading } from '../cardPlantLoading/cardPlantLoading';

export const PlantsList = ({plants}) => {
  if (plants !== 'loading') {
    return (
        <Row>

          {plants.map((plant) => (

           
            
            <CardPlant
            name={plant.name}
            description={plant.description}
            price={plant.price}
            stock={plant.stock}
            img={Math.floor(Math.random() * 12) + 1}
            />
          ))}
        </Row>
    )}else{
    return (
      <Row>
            <CardPlantLoading/>
            <CardPlantLoading/>
            <CardPlantLoading/>
        </Row>
    )}
}