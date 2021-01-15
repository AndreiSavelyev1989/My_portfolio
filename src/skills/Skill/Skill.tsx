import style from "./Skill.module.css";
import React from "react";

type PropsType = {
    title: string
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>icon</div>
            <h3>{props.title}</h3>
            <div>{props.description}</div>
        </div>
    )
}