import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar flex-column flex-md-row navbar-dark bg-dark">
                <div className="col-12 col-md-auto text-center">
                    <p className="navbar-brand text-white">
                        Tongtong Ding
                    </p>
                </div>
                <ul className="nav">
                    <li className="nav-item text-white">
                        <NavLink to="/" exact className="nav-link">
                            Home
                    </NavLink>
                    </li>
                    <li className="nav-item text-white">
                        <NavLink to="/portfolio" className="nav-link">
                            Portfolio
                    </NavLink>
                    </li>
                    <li className="nav-item text-white">
                        <NavLink to="/contact" className="nav-link">
                            Contact
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;