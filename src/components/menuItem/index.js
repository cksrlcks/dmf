import React from "react";
import { Link } from "react-router-dom";
import { priceToString } from "../../helper/helper";

const MenuItem = ({ menu }) => {
    return (
        <li>
            <Link className="menu-item" to={`${menu.id}`}>
                <div className="badge">
                    {menu.hot && <span className="badge-item hot">인기</span>}
                    {menu.recommand && <span className="badge-item rec">추천</span>}
                    {menu.soldOut && <span className="badge-item sold">품절</span>}
                    {menu.new && <span className="badge-item new">신상품</span>}
                </div>
                {!menu.thumbnailUrl ? <div className="item-thumbnail no-thumb"></div> : <div className="item-thumbnail" style={{ backgroundImage: "url(" + menu.thumbnailUrl + ")" }}></div>}
                <div className="item-namezone">
                    <div className="item-category">{menu.category}</div>
                    <div className="item-name">{menu.name}</div>
                </div>

                <div className="item-desc">{menu.desc}</div>
                <div className="item-price">
                    {menu.price ? priceToString(menu.price) : "-"}
                    <span className="unit">원</span>
                </div>
            </Link>
        </li>
    );
};

export default MenuItem;
