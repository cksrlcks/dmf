import React from "react";
import { useParams } from "react-router-dom";
import Slide from "../../components/slide";

import BackHeader from "../../components/backHeader";

const View = ({ menus }) => {
    const { id } = useParams();
    const menuData = menus.filter((menu) => menu.id === id).shift();
    const lists = menuData.picUrlList ? [menuData.thumbnailUrl, ...menuData.picUrlList] : [menuData.thumbnailUrl]
    return (
        <div className="view-conatiner">
            <BackHeader title={"메뉴"} />
            <Slide urlLists={lists} />
        </div>
    );
};

export default View;
