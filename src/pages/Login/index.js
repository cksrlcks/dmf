import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.signinWithGoggle().then((res) => {
            if (res == "success") {
                navigate("/menu");
            } else {
                //alert("로그인에 문제가 생겼습니다.");
            }
        });
    };

    return (
        <div className="app-inner">
            <div className="login-form">
                <div className="title">Dearmyfriend showpanel</div>
                <div className="exp">로그인이 필요합니다.</div>
                <button onClick={handleLogin} className="cm-btn">
                    구글로 로그인 하기
                </button>
            </div>
        </div>
    );
};

export default Login;
