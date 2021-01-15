import style from "./Intro.module.css";
import React from "react";

export const Intro = () => {
    return (
        <div className={style.intro}>
            <span>Hi there</span>
            <h1>I am
                <span> Andrei Saveluev</span>
            </h1>
            <p>A Frontend Developer</p>
        </div>
    )
}