import { InstagramEmbed } from "react-social-media-embed";
import React, { useState, useEffect, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";
import "./gallery.css";
import Carousel from "../../components/swiper/carousel";
import Loading from "../../components/loading/loading";

function Gallery() {
    const urls = [
        "https://www.instagram.com/p/CqfKU-uPlpb/",
        // "https://www.instagram.com/p/Ci4jpAZvJHo/",
        "https://www.instagram.com/p/CpHI7-mvMc5/",
        "https://www.instagram.com/p/CiU4qwfv9Bp/",
        "https://www.instagram.com/p/CmoMTXEvIjl/",
        "https://www.instagram.com/p/CnWkcJJPDCp/",
        "https://www.instagram.com/p/Cn_6eWbvtQX/",
    ];
    const slides = [];
    urls.forEach((url) => {
        slides.push({
            type: "div",
            content: <PostSlide src={url} />,
        });
    });

    const [slidesPerView, setSlidesPerView] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992 ? true : false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);
    const [lastIndex, setLastIndex] = useState(window.innerWidth < 992 ? 5 : 4);

    const onSwiperFunction = (swiper) => {
        setSwiper(swiper);
        swiper.on("slideChange", () => {
            setActiveIndex(swiper.activeIndex);
        });
    };

    useEffect(() => {
        swiper && swiper.slideTo(activeIndex, 500, false);
    }, [activeIndex, swiper]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setSlidesPerView(2);
            activeIndex === 5 && setActiveIndex(4);
            setLastIndex(4);
        } else {
            setSlidesPerView(1);
            setLastIndex(5);
        }
    }, [isMobile, activeIndex]);

    return (
        <Slide triggerOnce={true}>
            <div className="gallery-cards" data-active-index={activeIndex} data-last-index={lastIndex === activeIndex ? true : false}>
                <div className="gallery-title">Portfolio Gallery</div>
                <div className="gallery-pagination">
                    <FontAwesomeIcon icon={faCaretLeft} onClick={() => setActiveIndex(activeIndex === 0 ? 0 : activeIndex - 1)} />
                    {urls.map((url, index) => {
                        return (
                            <div className="gallery-pagination-item" key={index}>
                                <div className="gallery-pagination-item-circle" data-active={activeIndex === index || (!isMobile && activeIndex === index - 1) ? true : false}></div>
                            </div>
                        );
                    })}
                    <FontAwesomeIcon icon={faCaretRight} onClick={() => setActiveIndex(!isMobile && activeIndex === 4 ? 4 : activeIndex === 5 ? 5 : activeIndex + 1)} />
                </div>
                <div className="gallery-carousel">
                    <Carousel items={slides} slidesPerView={slidesPerView} onSwiperFunction={onSwiperFunction}></Carousel>
                </div>
            </div>
        </Slide>
    );
}

const renderLoader = () => <Loading />;

function PostSlide({ src }) {
    return (
        <div className="gallery-slide">
            <Suspense fallback={renderLoader()}>
                <InstagramEmbed url={src} width={380} embedPlaceholder={renderLoader()} />
            </Suspense>
            {/* {renderLoader()} */}
        </div>
    );
}

export default Gallery;
