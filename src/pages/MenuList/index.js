import React, { useState } from "react";
import MenuItem from "../../components/menuItem";
const Menu = ({ menus }) => {
    const [displayMenus, setDisplayMenus] = useState(menus);
    const [activeTab, setActiveTab] = useState(0);

    const filter = (string, activeNum) => {
        if (string.length) {
            const filterdList = menus.filter((item) => item.category === string);
            setDisplayMenus((prev) => filterdList);
        } else {
            setDisplayMenus((prev) => menus);
        }

        setActiveTab(activeNum);
    };

    return (
        <>
            {!menus.length ? (
                <div className="empty">등록된 메뉴가 없습니다.</div>
            ) : (
                <div className="app-outer">
                    <div className="app-inner app-body">
                        <div className="category-tab">
                            <button type="button" className={`tab-item ${activeTab === 0 ? "on" : ""}`} onClick={() => filter("", 0)}>
                                전체
                            </button>
                            <button type="button" className={`tab-item ${activeTab === 1 ? "on" : ""}`} onClick={() => filter("뼈간식", 1)}>
                                뼈간식
                            </button>
                            <button type="button" className={`tab-item ${activeTab === 2 ? "on" : ""}`} onClick={() => filter("건조간식", 2)}>
                                건조간식
                            </button>
                            <button type="button" className={`tab-item ${activeTab === 3 ? "on" : ""}`} onClick={() => filter("화식", 3)}>
                                화식
                            </button>
                            <button type="button" className={`tab-item ${activeTab === 4 ? "on" : ""}`} onClick={() => filter("베이커리", 4)}>
                                베이커리
                            </button>
                        </div>
                        <ul className="menu-list">
                            {displayMenus.length ? (
                                displayMenus.map((menu) => !menu.hide && <MenuItem menu={menu} key={menu.id} />)
                            ) : (
                                <div className="empty">해당 카테고리 제품이 없습니다.</div>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
