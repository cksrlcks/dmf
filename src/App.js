import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import SlideShow from "./pages/SlideShow";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/slideshow" element={<SlideShow />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
