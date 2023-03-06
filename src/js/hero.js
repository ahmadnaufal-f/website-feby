import heroPng from '../res/header.png';
// import { ReactComponent as WaveSvg } from '../res/wave.svg';
// import React, { useState, useEffect } from 'react';

function Hero() {
    // const initialScale = (100 / window.innerWidth) / 0.222;

    // const [scale, setScale] = useState(initialScale);

    // const setViewportWidth = width => {
    //     const scale = (100 / width) / 0.222;
    //     setScale(scale);
    // }

    // useEffect(() => {
    //     const handleResize = () => setViewportWidth(window.innerWidth);
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
        <div className='d-flex flex-column align-items-center container-custom-bg'>
            <div id="home" className='web-title'>Liska Feby</div>
            <div className='web-subtitle'>Reveal your best skin with trusted reviews</div>
            <div id="about" className='meja'></div>
            <div className='hero-image'>
                <img src={heroPng} alt="Liska Feby" width="320" height="320" />
            </div>
        </div>
    );
}

export default Hero;