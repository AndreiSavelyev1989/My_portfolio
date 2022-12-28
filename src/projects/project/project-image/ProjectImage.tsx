import React from "react";
import style from "./ProjectImage.module.css"

type PropsType = {
    title: string
    style: object
}
export const ProjectImage:React.FC<PropsType> = (props) => {
    return (
        <div className={style.view}>
            <div className={style.backImage} style={props.style}></div>
            <div className={style.mask}>
                <h2>{props.title}</h2>
                <p>A cool description of some sort between these tags. I am so cool and awesomely awesome.</p>
                <a href="#" className={style.info}>Go to</a>
            </div>
        </div>
    )
}