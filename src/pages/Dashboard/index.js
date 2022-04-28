import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Link to="/menu">메뉴 모드</Link>
            <br />
            <Link to="/slideshow">슬라이드쇼 모드</Link>
            <br />
            <Link to="/setting">설정</Link>
        </div>
    );
};

export default Dashboard;
