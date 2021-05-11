import { InputGroup, FormControl, Button, Row, Col, Container } from 'react-bootstrap';
import { TiSocialTwitter, TiSocialFacebook, TiSocialGithub, TiSocialPinterest } from 'react-icons/ti';

export const Footer = () => {
    return(
        <div style={{ backgroundColor: '#1b1b1b', color: '#fff', padding: '7rem 0rem' }}>
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
                  <Button variant="outline-secondary">Ser parte</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <h5>Plant Paradise</h5>
              <ul>
                <li>
                  <a href="/">Tienda</a>
                </li>
                <li>
                  <a href="/">¿Como funciona?</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
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