import React from "react";
import styleContainer from "../common/style/Container.module.css";
import style from "./Skills.module.css";
import {SkillType} from "../App";
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

type PropsType = {
    skills: Array<SkillType>
}

export const Skills = (props: PropsType) => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    {props.skills.map(skill => <Skill
                        key={skill.id}
                        title={skill.title}
                        icon={skill.icon}
                        description={skill.description}/>)}
                </div>
            </div>
        </div>
    )
}