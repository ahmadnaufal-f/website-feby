import "./flipcard.css";
import { Slide } from "react-awesome-reveal";

function FlipCard({ role, id }) {
    const onShow = (inView) => {
        const cards = document.querySelectorAll(".flip-card");
        setTimeout(() => {
            cards[id].classList.add("active");
            setTimeout(() => {
                cards[id].classList.remove("active");
            }, 1000);
        }, 1000);
    };

    return (
        <Slide triggerOnce={true} onVisibilityChange={onShow}>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="flip-card-title">{role.string}</p>
                    </div>
                    <div className="flip-card-back" data-index={id}>
                        <img src={role.pic} alt={role.string} className="flip-card-pic" />
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default FlipCard;
