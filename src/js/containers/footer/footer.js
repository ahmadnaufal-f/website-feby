import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <p>© 2023 Liska Feby. All rights reserved.</p>
                <p style={{ fontSize: ".8rem" }}>
                    Created with <FontAwesomeIcon icon={faHeart} /> by Ahmad Naufal
                </p>
            </div>
        </div>
    );
}

export default Footer;
