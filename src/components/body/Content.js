import React from "react";

import "./content.css";

const Content = ({ backgroundImage, title, text, darkTheme }) => {
    return (
        <div className={darkTheme ? "content-box-black" : "content-box-white"}>
            <div className='background'>
                <img src={backgroundImage} alt='' />
            </div>
            <div className='content-box-text'>
                <div className='heading'>{title}</div>
                <div className='body-text'>{text}</div>
                <button>PURCHASE</button>
            </div>
        </div>
    );
};

export default Content;
