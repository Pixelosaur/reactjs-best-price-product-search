import React from 'react';

import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <span>copyright &copy; 2020</span>
                    <div className="d-flex justify-content-between align-items-center">
                        <i className="fab fa-twitter" />
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-instagram" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
