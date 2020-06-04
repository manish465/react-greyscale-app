import React from "react";

import "./header.css";

import { motion } from "framer-motion";

const tab = ["HOME", "GALLERY", "BLOG", "PAGE", "SHOP", "ELEMENTS"];

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -90, rotateX: 180 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
                type: "spring",
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
            }}
            className='appBar'>
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
        </motion.header>
    );
};

export default Header;
