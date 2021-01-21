import style from "./Title.module.css";
import React from "react";

type PropsType = {
    title: string
}

export const Title = (props: PropsType) => {
    return (
        <div>
            <h2 className={style.title}>{props.title}</h2>
            <div className={style.animatedBar}> </div>
        </div>
    )
}