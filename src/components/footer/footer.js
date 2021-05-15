import { InputGroup, FormControl, Button, Row, Col, Container } from 'react-bootstrap';
import { TiSocialTwitter, TiSocialFacebook, TiSocialGithub, TiSocialPinterest } from 'react-icons/ti';

export const Footer = () => {
    return(
        <div style={{fontFamily: 'Montserrat', padding: '3rem 0rem 7rem 0rem', borderTop:'1px rgba(0,0,0,0.1) solid',boxShadow: 'rgb(231 231 231 / 60%) -1px 1px 40px 3px'}}>
        <Container>
          <Row>
            <Col>
              <h5>Está al tanto de los ultimos productos, tendencias y ofertas</h5>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Tu email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-success">Ser parte</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <h5>Plantr</h5>
              <ul>
                <li>
                  <a href="/" className="footerLink">Tienda</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Seguir envio</a>
                </li>
                <li>
                  <a href="/">Soporte</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>Comunidad</h5>
              <ul>
                <li>
                  <a href="/">Grupo</a>
                </li>
                <li>
                  <a href="/">Foro</a>
                </li>
                <li>
                  <a href="/">Votación</a>
                </li>
                <li>
                  <a href="/">Sugerencias</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>Seguinos</h5>
              <div className="h5">
                <TiSocialTwitter />
                <TiSocialFacebook />
                <TiSocialPinterest />
                <TiSocialGithub />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}