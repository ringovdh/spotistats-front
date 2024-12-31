import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="header-area header-sticky background-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="index.html" className="logo">
                                <h1>Spotistats</h1>
                            </a>
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                <li className="scroll-to-section"><a href="#services">Services</a></li>
                                <li className="scroll-to-section"><a href="#courses">Courses</a></li>
                                <li className="scroll-to-section"><a href="#team">Team</a></li>
                                <li className="scroll-to-section"><a href="#events">Events</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;