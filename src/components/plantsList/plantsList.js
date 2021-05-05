import { Row } from 'react-bootstrap';
import '../../App.css';
import './plantsList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardPlant } from '../cardPlant/cardPlant';
import { CardPlantLoading } from '../cardPlantLoading/cardPlantLoading';
import { ButtonPlantr } from '../buttonPlantr/buttonPlantr';
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'


export const PlantsList = ({ plants }) => {
  if (plants !== 'loading') {
    if (plants === 'empty') {
      return (
        <Row style={{padding:'5rem 0 20rem 0', flexDirection: 'column'}}>
          <h4 style={{marginBottom: '2rem'}}>Aun no hay plantas en esta categoria</h4>
          <div style={{width: '20%'}}>
          <Link to='/'>
          <ButtonPlantr style={{}}><AiOutlineHome /> Volver al inicio</ButtonPlantr>
          </Link>
          </div>
        </Row>
        
      )
    } else {
      return (
        <Row>
          {plants.map((plant) => (
            <CardPlant
              id={plant.id}
              name={plant.name}
              description={plant.description}
              price={plant.price}
              stock={plant.stock}
              key={plant.id}
            />
          ))}
        </Row>
      )
    }

  } else {

    return (
      <Row>
        <CardPlantLoading />
        <CardPlantLoading />
        <CardPlantLoading />
      </Row>
    )
  }
}