import pic1 from '../../../res/about-carousel-3.jpg';
import pic2 from '../../../res/about-carousel-1.jpg';
import pic3 from '../../../res/about-carousel-2.jpg';
import pic4 from '../../../res/about-carousel-4.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Carousel from '../../components/carousel';
import './intro.css';

function Intro() {
    const picArr = [pic1, pic2, pic3, pic4];
    return (
        <Fade className='card-about-bg'>
            <div className='card-about'>
                <div className='about-wrapper'>
                    <Slide className='about-caption'>Hi, I am Feby!</Slide>
                    <Slide className='about-description'>I am here to help you to increase your product's visibility in the competitive beauty market. Let's work together to elevate your brand and take your skincare products to the next level.</Slide>
                </div>
                <Zoom className='swiper-container'>
                    <Carousel pics={picArr}></Carousel>
                </Zoom>
            </div>
        </Fade>
    );
}

export default Intro;