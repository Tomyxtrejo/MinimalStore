import './itemDetail.css'
import { Row, Col, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemInteractive } from '../itemInteractive/itemInteractive'
import { IoShieldCheckmarkOutline, IoHeartOutline } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { ButtonPlantr } from '../buttonPlantr/buttonPlantr';
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineLoading3Quarters } from 'react-icons/ai'



export const ItemDetail = ({ plant }) => {



    if (plant !== 'loading') {
        if (plant === 'empty') {
            return (
                <Container>
                    <Row style={{ padding: '15rem 0 20rem 0', flexDirection: 'column' }}>
                        <h4 style={{ marginBottom: '2rem' }}>La planta que buscas no existe</h4>
                        <div style={{ width: '20%' }}>
                            <Link to='/'>
                                <ButtonPlantr style={{}}><AiOutlineHome /> Volver al inicio</ButtonPlantr>
                            </Link>
                        </div>
                    </Row>
                </Container>
            )
        } else {
            //console.log(plant)
            return (
                <div>
                    <div className="plantDetails" style={{ backgroundColor: '#e7e7e7' }}>

                        <Container style={{ paddingTop: '8rem' }}>
                            <Row >
                                <Col md={6}>
                                    <div className="plantData">
                                        <h1 className="tittleH1 plantName">
                                            {plant.name}
                                            <IconContext.Provider value={{ color: "#3dcc62" }}>
                                                <IoHeartOutline />
                                            </IconContext.Provider>
                                        </h1>
                                        <h5 className="plantDescription">
                                            {plant.description}
                                        </h5>
                                        <div className="plantMainDetails">
                                            <div className="plantInteractive">
                                                <div className="plantPrice">
                                                    <h1 className="tittleH1 priceText">$ {plant.price}</h1>
                                                    <div className="plantShipping">
                                                        <h5 className="shippingText">Envio gratis!</h5>
                                                        <a className="linkSmall" href="/">Mas información</a>
                                                    </div>
                                                </div>
                                                <ItemInteractive item={plant} stock={plant.stock} size={plant.size} variety={plant.variety} id={plant.id} />
                                            </div>
                                            <div className="plantFeatures">
                                                <ul className="featuresList">
                                                    {plant.features.slice(0, 3).map((feature) => (
                                                        <li key={feature}>{feature}</li>
                                                    ))}
                                                    <li>Incluye pack de semillas</li>
                                                    <a href="#features">Ver todas</a>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="compraProtegida">
                                            <p className="info">
                                                <IoShieldCheckmarkOutline />
                                                <a href="/"> Compra protegida</a>, recibi el producto
                                        <br />o te devolvemos tu dinero
                                        </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="images">
                                    <Image src={require(`../../assets/semillas.png`).default} className="plantSeeds" fluid />
                                    <Image src={require(`../../assets/plants/plant${plant.foto}_1.png`).default} className="plantImage" fluid />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div style={{ marginTop: '2rem' }} id='features'>
                        <Container>

                            <h1 className="tittleH1" style={{ color: '#828683' }}>+info</h1>
                            <h5 className="plantPrimary">Descripcción</h5>
                            <p>
                                {plant.description}
                            </p>
                            <Row className="detailsSection2 mb-5">
                                <Col xs={6}>
                                    <img src={require(`../../assets/plants/plant${plant.foto}_2.png`).default} alt="" fluid="true" style={{ marginLeft: '', maxWidth: '100%', userSelect: 'none' }} />
                                </Col>
                                <Col xs={6} className="featuresList">
                                    <h5 className="plantPrimary">Caracteristicas</h5>
                                    <ul className="plantCaracteristicas">
                                        {plant.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </Col>


                                <Col xs={12} className="mt-5">
                                    <h5 className="plantPrimary">Opiniones (3)</h5>
                                </Col>
                                <Col xs={12} md={6} lg={4}>

                                    <div className="userCardName">
                                        <img src="https://picsum.photos/50" alt="" style={{ borderRadius: '100%', marginRight: '1rem' }} />
                                        <h6>Mariana L.</h6>
                                    </div>
                                    <div className="userCardComment">
                                        <p>Excelente planta, muy buena para interiores</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={4}>

                                    <div className="userCardName">
                                        <img src="https://picsum.photos/50" alt="" style={{ borderRadius: '100%', marginRight: '1rem' }} />
                                        <h6>Tomás Trejo</h6>
                                    </div>
                                    <div className="userCardComment">
                                        <p>La mejor compra que pude haber hecho, 100% recomendada</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={4}>

                                    <div className="userCardName">
                                        <img src="https://picsum.photos/50" alt="" style={{ borderRadius: '100%', marginRight: '1rem' }} />
                                        <h6>Juan M.</h6>
                                    </div>
                                    <div className="userCardComment">
                                        <p>Buena para principiantes ya que no requiere de mucho cuidado</p>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
            )
        }

    } else {

        return (
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15rem 0 20rem 0', flexDirection: 'column' }}>
                    <AiOutlineLoading3Quarters className="loader" />
                </Row>
            </Container>
        )
    }
}