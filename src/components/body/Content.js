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
                    transition={{
                        type: "spring",
                        delay: 1.2,
                        ease: "easeOut",
                        duration: 0.7,
                        damping: 20,
                    }}
                    className='heading'>
                    {title}
                </motion.div>
                <motion.div
                    initial={{ y: -190, opacity: 0, rotateX: 180 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                        type: "spring",
                        delay: 1.2,
                        ease: "easeOut",
                        duration: 0.7,
                    }}
                    className='body-text'>
                    {text}
                </motion.div>
                <motion.button
                    whileTap={{ borderRadius: 50 }}
                    whileHover={{ scale: 1.8 }}>
                    PURCHASE
                </motion.button>
            </div>
        </div>
    );
};

export default Content;
