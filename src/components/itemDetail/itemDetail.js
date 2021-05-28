import './itemDetail.css'
import { Row, Col, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemInteractive } from '../itemInteractive/itemInteractive'
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Notice } from '../notice/notice'
import { WishListButton } from '../wishListButton/wishListButton'

export const ItemDetail = ({ plant, inCart }) => {
    if (plant !== 'loading') {
        if (plant === 'empty') {
            return (
                <Notice header="La planta que buscas no existe" buttons={[{ text: 'Volver al inicio', link: '/', icon: 'home' }]} />
            )
        } else {
            return (
                <div>
                    <div className="plantDetails">
                        <Container className="plantInfoContainer">
                            <Row >
                                <Col md={6}>
                                    <div className="plantData">
                                        <h1 className="tittleH1 plantName">
                                            {plant.name}
                                            <div className="wishListButton">
                                                <IconContext.Provider value={{ color: "#3dcc62" }}>
                                                    <WishListButton plant={plant} />
                                                </IconContext.Provider>
                                            </div>
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
                                                <ItemInteractive item={plant} stock={inCart[0] ? (plant.stock - inCart[1]) : plant.stock} size={plant.size} variety={plant.variety} id={plant.id} />
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
                                    <Image src={plant.images[0]} className="plantImage" fluid />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="featuresContainer" id='features'>
                        <Container>
                            <h1 className="tittleH1 infoHeader">+info</h1>
                            <h5 className="plantPrimary">Descripcción</h5>
                            <p>
                                {plant.description}
                            </p>
                            <Row className="detailsSection2 mb-5">
                                <Col xs={6}>
                                    <img src={plant.images[1]} alt="" fluid="true" className="plantImageFeatures" />
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
                                        <img src="https://picsum.photos/50" alt="" className="userCommentImage" />
                                        <h6>Mariana L.</h6>
                                    </div>
                                    <div className="userCardComment">
                                        <p>Excelente planta, muy buena para interiores</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                    <div className="userCardName">
                                        <img src="https://picsum.photos/50" alt="" className="userCommentImage" />
                                        <h6>Tomás Trejo</h6>
                                    </div>
                                    <div className="userCardComment">
                                        <p>La mejor compra que pude haber hecho, 100% recomendada</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={4}>
                                    <div className="userCardName">
                                        <img src="https://picsum.photos/50" alt="" className="userCommentImage" />
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
                <Row className="loaderContainer">
                    <AiOutlineLoading3Quarters className="loader" />
                </Row>
            </Container>
        )
    }
}