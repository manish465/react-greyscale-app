import React from "react";

import Content from "./Content";

import data from "./../../data/bodyData";

const Contents = () => {
    return (
        <>
            {data.map((el, key) => (
                <Content
                    key={key}
                    title={el.heading}
                    backgroundImage={el.img}
                    text={el.contentText}
                    darkTheme={el.darkTheme}
                />
            ))}
        </>
    );
};

export default Contents;
