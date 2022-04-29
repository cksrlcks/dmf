import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.user && auth.user.level < 3) {
            alert("관리자가 로그인하였습니다. 메뉴페이지로 이동합니다.");
            navigate("/menu");
        }
    }, [auth]);
    return (
        <div>
            <button onClick={(e) => auth.signinWithGoggle()}>Sign In(google)</button>
        </div>
    );
};

export default Login;
