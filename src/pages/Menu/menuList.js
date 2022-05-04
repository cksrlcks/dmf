import React from "react";
import MenuItem from "../../components/menuItem";
const Menu = ({ menus }) => {
    return (
        <>
            {!menus.length ? (
                <div className="empty">등록된 메뉴가 없습니다.</div>
            ) : (
                <div className="app-outer">
                    <div className="app-inner">
                        <ul className="menu-list">{menus.map((menu) => !menu.hide && <MenuItem menu={menu} key={menu.id} />)}</ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
