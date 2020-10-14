import React from 'react';

import './Header.scss';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div id="logo-container">
                        <img className="img-fluid" id="logo" src={logo} alt="BestPrice logo" />
                    </div>
                    <div id="user-actions-container">
                        <span>Login</span>
                        <span>Register</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
