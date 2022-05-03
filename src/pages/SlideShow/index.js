import React from "react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import useCollection from "../../hooks/useCollection";

const SlideShow = () => {
    const { data: menus = [], loading, error} = useCollection("menus");
    const imgLists = [];
    menus.forEach((menu) => {
        imgLists.push(menu.thumbnailUrl);
        menu.picUrlList && menu.picUrlList.length && menu.picUrlList.map((item) => imgLists.push(item));
    });

    return (
        <>
            {!imgLists.length ? (
                <div className="empty">슬라이드쇼를 위한 사진리스트가 업습니다.</div>
            ) : (
                <div className="slide-container slide-show">
                    <Swiper modules={[Autoplay, EffectFade]} autoplay={{ delay: 2000 }} effect={"fade"} allowTouchMove={false}>
                        {imgLists && imgLists.map((list, idx) => <SwiperSlide key={idx} style={{ backgroundImage: "url(" + list + ")" }}></SwiperSlide>)}
                    </Swiper>
                </div>
            )}
        </>
    );
};

export default SlideShow;
