import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
const BackHeader = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div className="app-header">
            <div className="app-inner">
                <button type="button" className="button" onClick={() => navigate(-1)}>
                    <div className="back-icon">
                        <HiArrowLeft className="icon" />
                    </div>
                    <div className="title">{title}</div>
                </button>
            </div>
        </div>
    );
};

export default BackHeader;
