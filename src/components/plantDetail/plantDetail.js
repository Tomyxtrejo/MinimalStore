import './plantDetail.css'
import { Row, Col, Image, Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemInteractive } from '../itemInteractive/itemInteractive'
import imgplanta1 from '../../assets/plants/plant1_1.png'
import imgplanta2 from '../../assets/plants/plant1_2.png'
import { IoShieldCheckmarkOutline, IoHeartOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from "react-icons";



export const PlantDetail = () => {
    return (
        <div>
            <div className="plantDetails" style={{ backgroundColor: '#e7e7e7' }}>

                <Container style={{ paddingTop: '8rem' }}>
                    <Row >
                        <Col md={6}>
                            <div className="plantData">
                                <h1 className="tittleH1">
                                    Dracaena Sanderiana
                                <IconContext.Provider value={{ color: "#3dcc62" }}>
                                        <IoHeartOutline />
                                    </IconContext.Provider>
                                </h1>
                                <h5 className="plantDescription">Comunmente llamada "bambu de la suerte". Puede sobrevivir en muchos ambientes cerrados</h5>
                                <div className="plantMainDetails">
                                    <div className="plantInteractive">
                                        <div className="plantPrice">
                                            <h1 className="tittleH1 priceText">$ 350</h1>
                                            <div className="plantShipping">
                                                <h5 className="shippingText">Envio gratis!</h5>
                                                <a href="#" className="linkSmall">Mas información</a>
                                            </div>
                                        </div>
                                        <ItemInteractive stock={5} />
                                    </div>
                                    <div className="plantFeatures">
                                        <ul className="featuresList">
                                            <li>Apto novatos</li>
                                            <li>Para interiores</li>
                                            <li>Espanta insectos</li>
                                            <li>Incluye pack de semillas</li>
                                            <a href="#features">Ver todas</a>
                                        </ul>
                                    </div>
                                </div>
                                <div className="compraProtegida">
                                    <p className="info">
                                        <IoShieldCheckmarkOutline />
                                        <a href="#"> Compra protegida</a>, recibi el producto
                                    <br />o te devolvemos tu dinero
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Image src={imgplanta1} className="plantImage" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ marginTop: '2rem' }} id='features'>
                <Container>

                    <h1 className="tittleH1" style={{ color: '#828683' }}>+info</h1>
                    <h5 className="plantPrimary">Descripcción</h5>
                    <p>
                    Comunmente llamada "bambu de la suerte". Puede sobrevivir en muchos ambientes cerradoses y psilotales) y el grupo conocido popularmente como de los "helechos verdaderos" (maratiales y polipódidos) que hoy en día luego de los análisis moleculares de ADN consensuados se determinó que forman un clado (grupo monofilético según la escuela cladista).
                        se puede dividir en dos gruposː Ophioglossidae (ofioglosales y psilotales) y el grupo conocido popularmente como de los "helechos verdaderos" (maratiales y polipódidos) que hoy en día luego de los análisis moleculares de ADN consensuados se determinó que forman un clado (grupo monofilético según la escuela cladista).
                    </p>
                    <Row className="detailsSection2" className="mb-5">
                        <Col xs={6}>
                            <img src={imgplanta2} alt="" fluid style={{marginLeft: '',maxWidth:'100%'}} />
                        </Col>
                        <Col xs={6} className="featuresList">
                            <h5 className="plantPrimary">Caracteristicas</h5>
                            <ul className="plantCaracteristicas">
                                <li>Apto novatos</li>
                                <li>Para interiores</li>
                                <li>Espanta insectos</li>
                                <li>Facil mantenimiento</li>
                                <li>Apto novatos</li>
                                <li>Para interiores</li>
                                <li>Espanta insectos</li>
                                <li>Facil mantenimiento</li>
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