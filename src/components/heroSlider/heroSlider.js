import { Jumbotron, Container } from 'react-bootstrap';


export const HeroSlider = ({tittle, subtittle,img}) => {
    return(
        <Jumbotron style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundAttachment: 'right', height: '23rem' }}>
        <Container style={{ marginTop: '6rem' }}>
          <h1 className="tittleH1">{tittle}</h1>
          <p>{subtittle}</p>
        </Container>
      </Jumbotron>
    )
}