import Container from 'react-bootstrap/Container';
import heroPng from '../res/header.png'

function Hero() {
    return (
        <Container className='d-flex flex-column align-items-center container-custom-bg'>
            <div className='web-title'>Liska Feby</div>
            <div className='web-subtitle'>Reveal your best skin with trusted reviews</div>
            <div className='hero-image'>
                <div className='meja'></div>
                <img src={heroPng} alt="Liska Feby" width="320" height="320" />
            </div>
        </Container>
    );
}

export default Hero;