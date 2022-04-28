import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth";

const Login = () => {
    const auth = useAuth();

    return (
        <div>
            <button onClick={(e) => auth.signinWithGoggle()}>Sign In(google)</button>
        </div>
    );
};

export default Login;
