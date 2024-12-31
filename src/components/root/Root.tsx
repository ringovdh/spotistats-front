import React from "react";
import Header from "../header/Header";
import Home from "../home/Home";

const RootLayout = () => {
    return (
        <>
            < Header />
            <div className="container mt-3 content">
                <Home></Home>
            </div>
        </>
    );
}

export default RootLayout;