import React from "react";
import style from "./ProjectImage.module.css"

type PropsType = {
    title: string
}
export const ProjectImage:React.FC<PropsType> = (props) => {
    return (
        <div className={`${style.view} ${style.viewFirst}`}>
            <img
                src="https://static1.squarespace.com/static/5aea79c52487fde9b8efd0b1/t/5bb6b38ce5e5f09147c1b8ab/1538700172787/empire-state.png" alt={"photo"}/>
            <div className={style.mask}>
                <h2>{props.title}</h2>
                <p>A cool description of some sort between these tags. I am so cool and awesomely awesome.</p>
                <a href="#" className={style.info}>Go to</a>
            </div>
        </div>
    )
}