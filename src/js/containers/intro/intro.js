import pic1 from "../../../res/about-carousel-3.jpg";
import pic2 from "../../../res/about-carousel-1.jpg";
import pic3 from "../../../res/about-carousel-2.jpg";
import pic4 from "../../../res/about-carousel-4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Button from "../../components/button/button";
import SocialButton from "../../components/button/socialButton";
import Carousel from "../../components/carousel";
import "./intro.css";

function Intro() {
  const picArr = [pic1, pic2, pic3, pic4];
  const waHref = "https://wa.me/6289655939257";
  const contactString = "Contact me";
  const socialItems = [
    {
      href: "https://www.tiktok.com/@meekomiko",
      icon: "fab fa-tiktok",
      className: "icon-button tiktok",
    },
    {
      href: "https://www.instagram.com/liskafeby/",
      icon: "fab fa-instagram",
      className: "icon-button instagram",
    },
  ];
  return (
    <Fade triggerOnce={true} className="card-about-bg">
      <div className="card-about">
        <div className="about-wrapper">
          <Slide delay={400} triggerOnce={true} className="about-caption">
            Hi, I am Feby!
          </Slide>
          <Slide delay={900} triggerOnce={true} className="about-description">
            I am here to help increasing your product's visibility in the
            competitive beauty market. Let's work together to elevate your brand
            and take your skincare products to the next level.
          </Slide>
          <div triggerOnce={true} className="button-container">
            <Button href={waHref} text={contactString} newTab={true}></Button>
            <div className="separator-line"></div>
            <SocialButton items={socialItems}></SocialButton>
          </div>
        </div>
        <Zoom triggerOnce={true} className="swiper-container">
          <Carousel delay={200} pics={picArr}></Carousel>
        </Zoom>
      </div>
    </Fade>
  );
}

export default Intro;
