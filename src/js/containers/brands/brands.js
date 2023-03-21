import "./brands.css";
import { Slide, Zoom } from "react-awesome-reveal";
import { imgBundle } from "./images";

function Brands() {
    const heightArray = [42, 35, 28, 53, 48, 50, 77, 89];

    return (
        <div className="section-wrapper">
            <Slide triggerOnce={true} className="d-flex">
                <div className="brands-text-container">
                    <div className="brands-row-1 d-flex flex-direction-row align-items-center">
                        <div className="brands-20 me-1">20+ brands</div>
                        <div className="brands-caption-1">have joined.</div>
                    </div>
                    <div className="brands-row-2">Now is your brands' turn</div>
                </div>
            </Slide>
            <Zoom triggerOnce={true} className="d-flex">
                <div id="brands-container" className="brands-container">
                    {imgBundle.map((image, index) => {
                        return <img src={image} className="brands-image" height={heightArray[index]} alt={index} key={index}></img>;
                    })}
                </div>
            </Zoom>
        </div>
    );
}

export default Brands;
