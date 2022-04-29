import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import AppView from "./Layout/appView";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import SlideShow from "./pages/SlideShow";
import Setting from "./pages/Setting";

import { HiTag, HiChip, HiPlay } from "react-icons/hi";

function App() {
    const menus = [
        {
            id: "ee",
            name: "메뉴1",
            price: 5000,
            category: "화식",
            hide: false,
            soldOut: true,
            thumbnailUrl: "https://images.unsplash.com/photo-1651090518025-8c456a93834e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            picUrlList: [
                "https://images.unsplash.com/photo-1648737962083-056c3e4a437d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1651082325708-ce74a588bc98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1651144195647-f2a7381afb19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
            ],
            hot: true,
            new: true,
            recommand: true,
            desc: "설명ㅁ여여영녀련ㅇ",
        },
        {
            id: "e1",
            name: "메뉴2",
            price: 5000,
            category: "화식",
            hide: true,
            soldOut: false,
            thumbnailUrl: "https://images.unsplash.com/photo-1651091395331-419ec46442e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            picUrlList: [],
            hot: false,
            new: false,
            recommand: false,
            desc: "설명ㅁ여여영녀련ㅇ",
        },
        {
            id: "e11231",
            name: "메뉴3",
            price: 5000,
            category: "화식",
            hide: false,
            soldOut: false,
            thumbnailUrl: "https://images.unsplash.com/photo-1650527817207-c9ca71fb57cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            picUrlList: [],
            hot: false,
            new: false,
            recommand: false,
            desc: "설명ㅁ여여영녀련ㅇ",
        },
        {
            id: "e155345",
            name: "메뉴4",
            price: 5000,
            category: "화식",
            hide: false,
            soldOut: false,
            thumbnailUrl: "https://images.unsplash.com/photo-1650971582961-fb6a73037ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            picUrlList: [],
            hot: false,
            new: false,
            recommand: false,
            desc: "설명ㅁ여여영녀련ㅇ",
        },
    ];

    return (
        <AppView>
            <Router>
                <ScrollToTop />
                <div id="container">
                    <Routes>
                        <Route path="/" element={<Navigate replace to="menu" />} />
                        <Route path="menu/*" element={<Menu menus={menus} />}></Route>
                        <Route path="slideshow" element={<SlideShow menus={menus} />} />
                        <Route path="setting/*" element={<Setting menus={menus} />}></Route>
                        <Route path="login" element={<Login />} />
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
        </AppView>
    );
}

export default App;
