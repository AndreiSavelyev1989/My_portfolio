import style from "./Intro.module.css";
import React from "react";

export const Intro = () => {
    return (
        <div className={style.intro}>
            <h1>
                <span className={style.introName}> Andrei Saveluev</span>
            </h1>
            <span className={style.cdWords}>I'm a </span>
            <p className={style.singleHeadline}>
                Frontend developer</p>
        </div>
    )
}