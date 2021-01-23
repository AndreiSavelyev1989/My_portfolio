import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/style/Container.module.css";
import {ProjectType} from "../App";
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

type PropsType = {
    projects: Array<ProjectType>
}

export const Projects = (props: PropsType) => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    {props.projects.map(progect => <Project
                        key={progect.id}
                        title={progect.title}
                        description={progect.description}/>)}
                </div>
            </div>
        </div>
    );
}