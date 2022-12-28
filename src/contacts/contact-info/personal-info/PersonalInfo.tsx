import React from "react";
import style from "./PersonalInfo.module.css"

type PropsType = {
    id?: number
    icon: any
    title: string
    content: string
}

export const PersonalInfo: React.FC<PropsType> = (props) => {
    return (
        <div className={style.infoBlock}>
            <div className={style.iconBlock}>
                <div className={style.icon}>{props.icon}</div>
            </div>
            <div>
                <div className={style.title}>{props.title}</div>
                <div>{props.content}</div>
            </div>
        </div>
    )
}