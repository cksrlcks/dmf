import React from "react";
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
