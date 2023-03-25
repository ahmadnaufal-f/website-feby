import heroPng from "../../../res/header.png";
import bg from "../../../res/background.svg";
import { Fade } from "react-awesome-reveal";
import "./hero.css";
import { useState, useEffect, useRef } from "react";

function Hero() {
    const [posY, setPosY] = useState(0);
    const [scale, setScale] = useState(1);
    const myRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            const position = window.scrollY;
            const height = (window.screen.height - 540) / 2;
            if (height < 0) {
                return;
            }
            setPosY(Math.min((height * position) / 500, height));
            setScale(Math.min((0.4 * position) / 500 + 1, 1.4));
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    useEffect(() => {
        if (myRef.current) {
            const transform = `translateY(${posY}px) scale(${scale})`;
            myRef.current.style.transform = transform;
        }
    }, [posY, scale]);

    return (
        <section id="hero">
            <div id="wx-background" className="wx-background" ref={myRef}>
                <img src={bg} alt="background" />
            </div>
            <Fade triggerOnce={true}>
                <div className="d-flex flex-column align-items-center container-custom-bg">
                    <div id="home" className="web-title">
                        Liska Feby
                    </div>
                    <div className="web-subtitle">Reveal your best skin with trusted reviews</div>
                    <div id="about" className="meja"></div>
                    <div className="hero-image">
                        <img src={heroPng} alt="Liska Feby" width="320" height="320" />
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Hero;
