import React from "react";

import "./header.css";

const tab = ["HOME", "GALLERY", "BLOG", "PAGE", "SHOP", "ELEMENTS"];

const Header = () => {
    return (
        <header className='appBar'>
            <div className='logo-conatiner'>FUEGO.</div>
            <ul className='appBar-tabs'>
                {tab.map((el, key) => (
                    <li className='link-tabs' key={key}>
                        {el}
                    </li>
                ))}
            </ul>
            <div className='menu-icon'>menu</div>
        </header>
    );
};

export default Header;
