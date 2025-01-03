import React from "react";
import Header from "../header/Header";
import Home from "../home/Home";
import Footer from "../footer/Footer";

const RootLayout = () => {
    return (
        <>
            < Header />
            <div className="container mt-3 content">
                < Home />
            </div>
            < Footer />
        </>
    );
}

export default RootLayout;