import React from 'react';
import "./Footer.css";


function Footer() {
    return (
        <footer className="footer text-center">
            <div className="container">
                <span className="text-white fixed-bottom" >
                    <i className="fas fa-envelope"></i>: tding7@asu.edu
                    <i className="fas fa-phone"></i>: 480-278-5578
                </span>
            </div>
        </footer>
    );
};

export default Footer;