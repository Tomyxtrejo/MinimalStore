import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroSlider } from '../../components/heroSlider/heroSlider';
import { ItemListContainer } from '../../components/itemListContainer/itemListContainer';
import slide from "../../assets/slide.jpg";



export const Home = () => {





    return (
        <div id="home">

            <HeroSlider
                tittle="Tu tienda de plantas"
                subtittle="Venimos a mejorar tu experiencia con el mundo de las plantas.
    Ofrecemos todo tipo de variedades para que encuentres
    la que mejor se adapte a vos."
                img={slide} />

            <ItemListContainer
                greeting="No te las pierdas!"
                tittle="Tendencias esta semana"
                anchor="trends"
            />

            <ItemListContainer
                greeting=" "
                tittle="Novedades"
                anchor="new"
            />


        </div>
    );
}

