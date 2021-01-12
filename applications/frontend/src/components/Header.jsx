import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        <div className="logo">
                            <img src={require("../../static/frontend/img/vk-1.svg").default} alt="logo" className="logo_img"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
