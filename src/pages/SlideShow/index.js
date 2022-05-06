import React, { useEffect, useState } from "react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import useCollection from "../../hooks/useCollection";

const SwiperBox = ({ data }) => {
    const [allDatas, setAllDatas] = useState([]);
    useEffect(() => {
        setAllDatas(data);
    }, [data]);
    const imgLists = [];
    allDatas &&
        allDatas.forEach((menu) => {
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

const SlideShow = () => {
    const { data, loading, error } = useCollection("menus");

    return <SwiperBox data={data} />;
};

export default SlideShow;
