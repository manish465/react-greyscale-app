import React from "react";

import "./header.css";

const tab = ["HOME", "GALLERY", "BLOG", "PAGE", "SHOP", "ELEMENTS"];

const Header = () => {
    return (
        <header className='appBar'>
            <div className='logo-conatiner'>
                <img src={require("../../assets/LogoIcons.svg")} alt='logo' />
            </div>
            <ul className='appBar-tabs'>
                {tab.map((el, key) => (
                    <li className='link-tabs' key={key}>
                        <button>{el}</button>
                    </li>
                ))}
            </ul>
            <div className='menu-icon'>
                <img src={require("../../assets/MenueButton.svg")} alt='' />
            </div>
        </header>
    );
};

export default Header;
