import "./roles.css";
import FlipCard from "../../components/flipcard/flipcard";
import { Slide, Zoom } from "react-awesome-reveal";
import { imgBundle } from "./images";

function Roles() {
    const roleList = [
        {
            id: "career",
            string: "Career Women",
            pic: imgBundle[0],
        },
        {
            id: "kpop",
            string: "K-popers",
            pic: imgBundle[1],
        },
        {
            id: "city",
            string: "City Strollers",
            pic: imgBundle[2],
        },
    ];
    return (
        <div className="d-flex flex-column section-wrapper">
            <Slide triggerOnce={true} className="mx-auto">
                <div className="roles-text">If your target market includes any of these:</div>
            </Slide>
            <div className="roles-container my-4">
                {roleList.map((role, index) => {
                    return <FlipCard role={role} key={index} id={index}></FlipCard>;
                })}
            </div>
            <Zoom triggerOnce={true} className="mx-auto">
                <div className="roles-text bold">I'm your best choice! 😉 </div>
            </Zoom>
        </div>
    );
}

export default Roles;
