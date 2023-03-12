import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import React, { Component } from "react";

export default class Carousel extends Component {
    render() {
        const pics = this.props.pics;
        return (
            <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true, type: 'bullets' }} navigation>
                {pics.map((value, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img className='img-about' src={value} alt="" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }
}