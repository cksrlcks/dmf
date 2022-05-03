import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../lib/auth";
import { HiOutlinePlusCircle, HiOutlineLightningBolt, HiOutlineSwitchVertical, HiLogout } from "react-icons/hi";
const Menu = () => {
    const auth = useAuth();
    return (
        <>
            <div className="setting-gnb">
                <div className="app-inner">
                    <Link to="add" className="item">
                        <HiOutlinePlusCircle className="icon" />
                        <span className="name">메뉴 추가하기</span>
                    </Link>
                    <Link to="status" className="item">
                        <HiOutlineLightningBolt className="icon" />
                        <span className="name">메뉴 상태변경</span>
                    </Link>
                    <Link to="order" className="item">
                        <HiOutlineSwitchVertical className="icon" />
                        <span className="name">노출 순서변경</span>
                    </Link>
                    <button type="button" className="item" onClick={() => auth.signout()}>
                        <HiLogout className="icon" />
                        <span className="name">로그아웃</span>
                    </button>
                </div>
            </div>

            <div className="copyright">Dearmyfriends showpanel. Ver 1.0</div>
        </>
    );
};

export default Menu;
