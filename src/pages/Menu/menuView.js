import React from "react";
import { useParams } from "react-router-dom";
import Slide from "../../components/slide";

import BackHeader from "../../components/backHeader";

const View = ({ menus }) => {
    const { id } = useParams();
    const menuData = menus.filter((menu) => menu.id === id).shift();
    return (
        <div className="view-conatiner">
            <BackHeader title={"메뉴"} />
            <Slide urlLists={[menuData.thumbnailUrl, ...menuData.picUrlList]} />
        </div>
    );
};

export default View;
