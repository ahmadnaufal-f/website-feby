import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Carousel from "../swiper/carousel";
import points1 from "../../../res/points-1.jpg";
import points2 from "../../../res/points-2.jpg";
import "./listitem.css";

function ListItem(props) {
    const items = props.items;
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);
    const [tagSwiper, setTagSwiper] = useState(null);
    const slideItems = [
        {
            type: "img",
            src: points1,
        },
        {
            type: "img",
            src: points2,
        },
        {
            type: "div",
            content: <PointsFollowers />,
        },
    ];
    const tagItems = [];
    items.forEach((item) => {
        tagItems.push({
            type: "div",
            content: <PointsTag title={item.title} subtitle={item.subtitle} />,
        });
    });

    useEffect(() => {
        tagSwiper && tagSwiper.slideTo(activeIndex, 300, false);
        swiper && swiper.slideTo(activeIndex, 500, false);
    }, [activeIndex, swiper, tagSwiper]);

    const onSwiperFunction = (swiper) => {
        setSwiper(swiper);
        swiper.on("slideChange", () => {
            setActiveIndex(swiper.activeIndex);
        });
    };

    const onTagSwiperFunction = (swiper) => {
        setTagSwiper(swiper);
        swiper.on("slideChange", () => {
            setActiveIndex(swiper.activeIndex);
        });
    };

    return (
        <div className="points-pane" data-active-index={activeIndex}>
            <div className="points-left-desktop">
                <div className="points-active-bg" style={{ transform: `translateY(${activeIndex * 40}px)` }}></div>
                {items.map((item, index) => {
                    return <ListItemRow title={item.title} subtitle={item.subtitle} index={index} key={index} isActive={activeIndex === index} onClickFunction={() => setActiveIndex(index)} />;
                })}
            </div>
            <div className="points-left-mobile">
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => setActiveIndex(activeIndex === 0 ? 0 : activeIndex - 1)} />
                <Carousel items={tagItems} onSwiperFunction={onTagSwiperFunction} />
                <FontAwesomeIcon icon={faChevronRight} onClick={() => setActiveIndex(activeIndex === 2 ? 2 : activeIndex + 1)} />
            </div>
            <div className="points-right">
                <Carousel items={slideItems} classFamily="img-about" onSwiperFunction={onSwiperFunction} />
            </div>
        </div>
    );
}

function ListItemRow({ title, subtitle, index, isActive, onClickFunction }) {
    return (
        <div className="points-left-items" key={index} data-is-active={isActive} onClick={onClickFunction}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="points-left-text">
                <span className="bold">{title}</span>
                {subtitle}
            </div>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );
}

function PointsFollowers() {
    return (
        <div className="d-flex align-items-center justify-items-center flex-column" style={{ padding: "28px" }}>
            <div className="points-sosmed">
                <div className="points-instagram-title">Instagram</div>
                <div className="points-sosmed-value">4.3K</div>
                <div className="points-sosmed-text">Followers</div>
            </div>
            <div className="points-sosmed">
                <div className="points-tiktok-title">TikTok</div>
                <div className="points-sosmed-value">1.3K</div>
                <div className="points-sosmed-text">Followers</div>
            </div>
        </div>
    );
}

function PointsTag({ title, subtitle }) {
    return (
        <div className="points-tag">
            <div className="points-tag-title">{title}</div>
            <div className="points-tag-subtitle">{subtitle}</div>
        </div>
    );
}

export default ListItem;
