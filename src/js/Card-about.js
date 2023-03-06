import pic1 from '../res/about-carousel-3.jpg';
import pic2 from '../res/about-carousel-1.jpg';
import pic3 from '../res/about-carousel-2.jpg';
import pic4 from '../res/about-carousel-4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function AboutCard() {
    const picArr = [pic1, pic2, pic3, pic4];
    return (
        <div className='card-about-bg'>
            <div className='card-about'>
                <div className='about-wrapper'>
                    <div className='about-caption'>Hi Beauty Enthusiast!</div>
                    <div className='about-description'>I am a reviewer for skin care and make up products. Let's get to know me and boost your brand selling with me.</div>
                </div>
                <div className='swiper-container'>
                    <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true, type: 'bullets' }} navigation>
                        {picArr.map((value, index) => {
                            return (
                                <SwiperSlide>
                                    <img className='img-about' src={value} alt="" />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;