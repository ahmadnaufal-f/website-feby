import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import React from "react";

function Carousel(props) {
    const items = props.items;
    const classFamily = props.classFamily;
    const onSwiperFunction = props.onSwiperFunction;
    return (
        <Swiper modules={[Navigation, Pagination]} pagination={props.pagination} navigation onSwiper={onSwiperFunction} slidesPerView={props.slidesPerView}>
            {items.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        {item.type === "img" && <img className={classFamily} src={item.src} alt="" />}
                        {item.type === "div" && item.content}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default Carousel;
