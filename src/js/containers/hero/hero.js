import heroPng from '../../../res/header.png';
import bg from '../../../res/background.svg'
import { Fade } from 'react-awesome-reveal';
import './hero.css';

function Hero() {
    return (
        <section id="hero">
            <Fade triggerOnce={true} >
                <div id='wx-background' className="wx-background">
                    <img
                        src={bg}
                        alt="background"
                    />
                </div>
                <div className='d-flex flex-column align-items-center container-custom-bg'>
                    <div id="home" className='web-title'>Liska Feby</div>
                    <div className='web-subtitle'>Reveal your best skin with trusted reviews</div>
                    <div id="about" className='meja'></div>
                    <div className='hero-image'>
                        <img src={heroPng} alt="Liska Feby" width="320" height="320" />
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Hero;