import style from "./Skill.module.css";
import React from "react";

type PropsType = {
    title: string
    description: string
    icon: any
}

export const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.skillIcon}>{props.icon}</div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <div className={style.skillDesc}>{props.description}</div>
        </div>
    )
}