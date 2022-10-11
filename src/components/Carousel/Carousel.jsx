import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { convertPriceToString } from "../../utils/serverUtils";
import { Link } from "react-router-dom";

export const Carousel = ({ data }) => {
    const handleHover = (e) => {
        return e.childNodes[1].style.opacity === "0" ||
            e.childNodes[1].style.opacity === ""
            ? (e.childNodes[1].style.opacity = "1")
            : (e.childNodes[1].style.opacity = "0");
    };

    const salePrice = (item) => item.basePrice - item.basePrice * item.deal;

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link
                        to={`/production/${item.id}`}
                        onClick={window.scrollTo(0, 0)}
                    >
                        <img
                            src={item.listImages[0].imgPath}
                            alt={item.name}
                            className="aspect-square object-cover relative"
                            onMouseOver={(e) =>
                                handleHover(e.target.parentNode.parentNode)
                            }
                            onMouseOut={(e) =>
                                handleHover(e.target.parentNode.parentNode)
                            }
                        />
                    </Link>
                    <div
                        className={`uppercase font-bold font-verda absolute bottom-0 p-5 bg-gray-900/40 w-full opacity-0 transition-all duration-200 ease-linear`}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = 0)}
                    >
                        <Link
                            to={`/production/${item.id}`}
                            onClick={window.scrollTo(0, 0)}
                        >
                            <p className="text-white/90 h-12">{item.name}</p>
                        </Link>
                        <p className="text-cyan-400 mb-2">
                            {convertPriceToString(salePrice(item))} VNĐ
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
