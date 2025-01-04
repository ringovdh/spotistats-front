import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";

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
                                <li>
                                    <NavLink to={"/"} className="scroll-to-section">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/load-data"} className="scroll-to-section">
                                       Load Data
                                   </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;