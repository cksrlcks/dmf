import React, { useLayoutEffect } from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/pagination";

const Slide = ({ urlLists }) => {
    // useLayoutEffect(() => {
    //     if (urlLists.length) {
    //         const swiper = document.querySelector(".swiper-container").swiper;
    //         swiper.update();
    //         swiper.slideTo(0);
    //         // update 후 스크롤이 맨 처음 content 위치로 이동
    //     }
    // }, [urlLists]);
    return (
        <div className="slide-container">
            <Swiper modules={[Pagination, Autoplay]} spaceBetween={10} pagination={{ type: "fraction" }} autoplay={{ delay: 2000 }} loop={true}>
                {urlLists && urlLists.map((list, idx) => <SwiperSlide key={idx} style={{ backgroundImage: "url(" + list + ")" }}></SwiperSlide>)}
            </Swiper>
        </div>
    );
};
export default Slide;
