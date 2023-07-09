import "./closing.css";
import Button from "../../components/button/button";
import febyAvatar from "../../../res/feby-avatar.png";
import { Slide } from "react-awesome-reveal";

function Closing() {
    const waHref = "https://wa.me/6289655939257";

    return (
        <Slide triggerOnce={true} className="section-wrapper short">
            <div className="closing-wrapper">
                <div className="closing-left">
                    <div className="closing-text">Ready to collaborate with me?</div>
                    <Button buttonClass={"button-pink"} href={waHref} text="Contact Me" newTab={true} />
                </div>
                <div className="closing-right">
                    <img src={febyAvatar} alt="feby-avatar" className="closing-avatar" />
                </div>
            </div>
        </Slide>
    );
}

export default Closing;
