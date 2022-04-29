import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/pagination";

const Slide = ({ urlLists }) => {
    return (
        <div className="slide-container">
            <Swiper modules={[Pagination, Autoplay]} spaceBetween={10} pagination={{ type: "fraction" }} autoplay={{ delay: 2000 }} loop={true}>
                {urlLists && urlLists.map((list, idx) => <SwiperSlide key={idx} style={{ backgroundImage: "url(" + list + ")" }}></SwiperSlide>)}
            </Swiper>
        </div>
    );
};
export default Slide;
