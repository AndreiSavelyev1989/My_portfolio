import React from "react";
import style from "./Project.module.css";
import {ProjectImage} from "./project-image/ProjectImage";

type PropsType = {
    title: string
    description: string
    style: object
}

export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <ProjectImage title={props.title} style={props.style}/>
            <div className={style.projectText}>
                <div className={style.projectTitle}>{props.title}</div>
                <div className={style.projectDecription}>{props.description}</div>
            </div>
        </div>
    )
}