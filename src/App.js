import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from "react-router-dom";
import ScrollToTop from "./components/scrollTop";
import AppView from "./Layout/appView";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import SlideShow from "./pages/SlideShow";
import Setting from "./pages/Setting";

import { HiTag, HiChip, HiPlay } from "react-icons/hi";
import { useAuth } from "./lib/auth";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts";

const ProtectedRoute = ({ auth, children }) => {
    if (!auth.user) {
        return <Navigate to="/login" />;
    } else if (auth.user.level > 3) {
        alert("권한이 없습니다. 로그아웃됩니다.");
        auth.signout();
        return <Navigate to="/menu" />;
    }

    return children;
};

function App() {
    const auth = useAuth();

    return (
        <AppView>
            <Router>
                <ScrollToTop />
                <div id="container">
                    <Routes>
                        <Route path="/" element={<Navigate replace to="menu" />} />
                        <Route path="menu/*" element={<Menu />}></Route>
                        <Route path="slideshow" element={<SlideShow />} />
                        <Route
                            path="setting/*"
                            element={
                                <ProtectedRoute auth={auth}>
                                    <Setting ToastsStore={ToastsStore} />
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route path="login" element={<Login ToastsStore={ToastsStore} />} />
                    </Routes>
                </div>
                <nav id="gnb">
                    <NavLink to="/menu" className="nav-item">
                        <HiTag className="icon" />
                        <span className="name">Menu</span>
                    </NavLink>
                    <NavLink to="/slideshow" className="nav-item">
                        <HiPlay className="icon" />
                        <span className="name">Show</span>
                    </NavLink>
                    <NavLink to="/setting" className="nav-item">
                        <HiChip className="icon" />
                        <span className="name">Setting</span>
                    </NavLink>
                </nav>
            </Router>
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} />
        </AppView>
    );
}

export default App;
