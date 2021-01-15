import React from "react";
import styleContainer from "../common/style/Container.module.css";
import style from "./Skills.module.css";
import {SkillType} from "../App";
import {Skill} from "./Skill/Skill";

type PropsType = {
    skills: Array<SkillType>
}

export const Skills = (props: PropsType) => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {props.skills.map(skill => <Skill
                        key={skill.id}
                        title={skill.title}
                        description={skill.description}/>)}
                </div>
            </div>
        </div>
    )
}