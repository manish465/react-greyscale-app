import React from "react";

import "./content.css";

import { motion } from "framer-motion";

const Content = ({ backgroundImage, title, text, darkTheme }) => {
    return (
        <div className={darkTheme ? "content-box-black" : "content-box-white"}>
            <div className='background'>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    src={backgroundImage}
                    alt=''
                />
            </div>
            <div className='content-box-text'>
                <motion.div
                    initial={{ y: -190, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, ease: "easeOut", duration: 0.7 }}
                    className='heading'>
                    {title}
                </motion.div>
                <motion.div
                    initial={{ y: -190, opacity: 0, rotateX: 180 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ delay: 1.2, ease: "easeOut", duration: 0.7 }}
                    className='body-text'>
                    {text}
                </motion.div>
                <button>PURCHASE</button>
            </div>
        </div>
    );
};

export default Content;
