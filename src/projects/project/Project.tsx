import React from "react";
import style from "./Project.module.css";

type PropsType = {
    title: string
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div className={style.projectImg}>
                <a href="#" className={style.projectLink}>Follow the link</a>
            </div>
            <div className={style.projectTitle}>{props.title}</div>
            <div className={style.projectDecription}>{props.description}</div>
        </div>
    )
}